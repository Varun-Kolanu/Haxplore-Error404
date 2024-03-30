import Event from "../models/eventModel.js";

export function createEvent(req, res) {
	const { name, description, mode } = req.body;
	const event = new Event({
		name,
		description,
		mode,
	});
	event
		.save()
		.then((event) => {
			res.status(201).json(event);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
}

export function getEvents(req, res) {
	Event.find()
		.then((events) => {
			res.status(200).json(events);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
}

export function getEvent(req, res) {
	Event.findById(req.params.id)
		.then((event) => {
			res.status(200).json(event);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
}

export function updateEvent(req, res) {
	Event.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	})
		.then((event) => {
			res.status(200).json(event);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
}
