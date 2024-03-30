import express from "express";
import {
	createTicket,
	cancelTicket,
} from "../controllers/ticketController";

const ticketRouter = express.Router();

ticketRouter.route("/").post(createTicket);
ticketRouter.route("/:ticketId").delete(cancelTicket);


export default ticketRouter;