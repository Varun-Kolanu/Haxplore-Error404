import Event from "./models/eventModel.js";
import Slot from "./models/slotModel.js";


export default async () => {
	//create an event
	const event = new Event({
		name: "Maha Puja",
		description: "Mahapuja daily occurs 3 times a day. Book a slot to attend.",
		mode: "daily",
	});

    await event.save();

	//create three slots
	const slot1 = new Slot({
		startTime: new Date("2021-09-01T09:00:00"),
		endTime: new Date("2021-09-01T10:00:00"),
		MAX_ATTENDEES: 10,
        event: event._id,
	});
	await slot1.save();
	const slot2 = new Slot({
		startTime: new Date("2021-09-01T10:00:00"),
		endTime: new Date("2021-09-01T11:00:00"),
		MAX_ATTENDEES: 10,
        event: event._id,
	});
	await slot2.save();
	const slot3 = new Slot({
		startTime: new Date("2021-09-01T11:00:00"),
		endTime: new Date("2021-09-01T12:00:00"),
		MAX_ATTENDEES: 10,
        event: event._id,
	});
	await slot3.save();
}