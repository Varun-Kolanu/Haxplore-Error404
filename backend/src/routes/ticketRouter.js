import express from "express";
import {
	cancelTicket,
	bookTickets,
	paymentFailed,
	confirmTickets,
} from "../controllers/ticketController.js";

const ticketRouter = express.Router();

ticketRouter.route("/book").post(bookTickets);
ticketRouter.route("/confirm").post(confirmTickets);
ticketRouter.route("/:ticketId").delete(cancelTicket);
ticketRouter.route("/payment_failed/:slotId").delete(paymentFailed);


export default ticketRouter;