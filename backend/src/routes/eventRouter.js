import express from "express";
import {
	createEvent,
	getEvent,
	getEvents,
	updateEvent,
} from "../controllers/eventController";

const eventRouter = express.Router();

eventRouter.route("/").get(getEvents).post(createEvent);
eventRouter.route("/:id").get(getEvent).patch(updateEvent);


export default eventRouter;