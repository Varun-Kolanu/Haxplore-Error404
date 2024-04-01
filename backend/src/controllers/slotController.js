import Event from "../models/eventModel";
import Slot from "../models/slotModel";

export const createSlots = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                message: 'You do not have permission to create slots'
            });
        }
        const { eventId, defaultMaxAttendees, defaultCost, startDate, endDate } = req.body;
        const event = await Event.findById(eventId);
        let currentDate = new Date(startDate);
        let slots = [];
        while (currentDate <= endDate) {
            event.slotRanges.forEach(async (slotRange) => {
                const slot = await Slot.create({
                    startTime: slotRange.startTime,
                    endTime: slotRange.endTime,
                    date: currentDate,
                    MAX_ATTENDEES: defaultMaxAttendees,
                    ticketCost: defaultCost
                });
                slots.push(slot);
            })
            currentDate.setDate(currentDate.getDate() + 1);
        }
        res.status(201)
        .json(slots);
    } catch (error) {
        next(error);
    }
}

export const updateSlot = async (req, res, next) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                message: 'You do not have permission to create slots'
            });
        }
        const slotId = req.params.id;
        const { maxAttendees, ticketCost } = req.body;
        let slot = await Slot.findById(slotId);
        if (maxAttendees) slot.MAX_ATTENDEES = maxAttendees;
        if (ticketCost) slot.ticketCost = ticketCost;
        await slot.save();
        res.status(200).json(slot);
    } catch (error) {
        next(error);
    }
}

export const getSlots = async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findById(eventId);
        res.status(200).json(event.slotRanges);
    } catch (error) {
        next(error);
    }
}