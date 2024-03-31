import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
	slot: { type: mongoose.Schema.Types.ObjectId, ref: "Slot" },
    booked_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	status: {
		type: String,
        default: "pending",
		enum: ["confirmed", "cancelled", "pending", "completed"],
		required: true,
	},
	entered: { type: Boolean, default: false },
	exited: { type: Boolean, default: false },
	createdAt: {
        type: Date,
        default: Date.now
    }
});

// create a Ticket model using the ticketSchema
const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;
