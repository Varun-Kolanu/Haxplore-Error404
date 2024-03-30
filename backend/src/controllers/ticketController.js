import express from "express";
import Slot from "../models/slotModel";
import Ticket from "../models/ticketModel";

// mutually exclusive allotment of tickets
export async function createTicket(req, res) {
	const { slotId, users, options } = req.body;
	const slot = await Slot.find;
	if (!slot) {
		return res.status(404).json({ message: "Slot not found" });
	}

	if (
		slot.MAX_ATTENDEES < slot.currentReserved + users.length &&
		options.all_together_or_none
	) {
		return res
			.status(400)
			.json({ message: "Not enough space in this slot" });
	}
	const session = await mongoose.startSession();
	session.startTransaction();
	const tickets = [];
	try {
		const opts = { session, new: true };
		while (slot.currentReserved < slot.MAX_ATTENDEES) {
			const ticket = new Ticket({
				slot: slotId,
				user: users.shift(),
				//todo: req.user must be present
				booked_by: req.user?._id,
				booked_at: new Date(),
				type: options.type,
				status: "reserved",
				checkinTime: null,
				checkOutTime: null,
			});
			const newTicket = await ticket.save(opts);
			tickets.push(newTicket);
			slot.currentReserved++;
			await slot.save(opts);
		}
		await session.commitTransaction();
	} catch (err) {
		await session.abortTransaction();
		return res.status(400).json(err);
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
