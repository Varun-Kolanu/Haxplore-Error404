import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
	ticketNumber: { type: Number, required: true },
	slot: { type: mongoose.Schema.Types.ObjectId, ref: "Slot" },
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	type: {
		type: String,
		enum: ["general", "tatkal", "last-minute"],
		required: true,
	},

	status: {
		type: String,
		enum: ["reserved", "cancelled", "waiting"],
		required: true,
	},
	checkinTime: { type: Date },
	checkOutTime: { type: Date },
});

// create a Ticket model using the ticketSchema
const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
