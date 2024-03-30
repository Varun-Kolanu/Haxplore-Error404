import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	mode: {
		type: String,
		enum: ["daily", "weekly", "monthly", "once"],
		required: true,
	},
});

// create an Event model using the eventSchema
const Event = mongoose.model("Event", eventSchema);
export default Event;
