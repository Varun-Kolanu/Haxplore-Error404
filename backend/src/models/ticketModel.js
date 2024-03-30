import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
	ticketNumber: { type: Number, required: true },
	slot: { type: mongoose.Schema.Types.ObjectId, ref: "Slot" },
    booked_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    person: {
        type: String, //todo: Person model
    },
	type: {
		type: String,
        default: "general",
		enum: ["general", "tatkal", "last-minute"],
		required: true,
	},

	status: {
		type: String,
        default: "reserved",
		enum: ["reserved", "cancelled", "waiting"],
		required: true,
	},
	checkinTime: { type: Date },
	checkOutTime: { type: Date },
});

// create a Ticket model using the ticketSchema
const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
