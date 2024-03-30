import express from "express";
import Slot from "../models/slotModel.js";
import Ticket from "../models/ticketModel.js";
import mongoose from "mongoose";

// mutually exclusive allotment of tickets
export async function createTicket(req, res) {
	const { slotId, persons, options } = req.body;
	let tickets;
    const session = await mongoose.startSession();
	try {
		session.startTransaction();
        const slot = await Slot.findById(slotId).session(session);
        if (!slot) {
            throw new Error("Slot not found");
        }
		const cap = Math.min(
			slot.MAX_ATTENDEES - slot.currentReserved,
			persons.length
		);
        if(cap < persons.length && options.all_together_or_none) {
            throw new Error("Not enough space in this slot for all persons together");
        }
		// Increment the currentReserved count atomically
		const updatedSlot = await Slot.findOneAndUpdate(
			{
				_id: slotId,
				currentReserved: { $lt: slot.MAX_ATTENDEES },
			},
			{ $inc: { currentReserved: cap } },
			{ new: true, session }
		);

		if (!updatedSlot) {
			throw new Error("Not enough space in this slot");
		}
		await session.commitTransaction();
		tickets = await Promise.all(
			Array.from({ length: cap }, (_, i) => {
				const ticket = new Ticket({
					slot: slotId,
					person: persons[i],
					ticketNumber:
						updatedSlot.currentReserved - cap + i + 1,
					booked_by: req.user?._id,
					booked_at: new Date(),
					type: options.type,
					status: "reserved",
					checkinTime: null,
					checkOutTime: null,
				});
				return ticket.save({ session });
			})
		);
		return res
			.status(201)
			.json({ tickets, notConfirmed: persons.slice(cap) });
	} catch (err) {
        await session.abortTransaction();
		return res.status(400).json({ message: err.message });
	} finally {
		session.endSession();
	}
}

export async function cancelTicket(req, res) {
	const { ticketId } = req.params;
	//todo: verify only the user who booked the ticket can cancel it
	const ticket = await Ticket.findById(ticketId);
	if (!ticket) {
		return res
			.status(404)
			.json({ message: "Ticket not found" });
	}
	if (ticket.status === "cancelled") {
		return res
			.status(400)
			.json({ message: "Ticket already cancelled" });
	}
	ticket.status = "cancelled";
	await ticket.save();
	return res.status(200).json(ticket);
}
