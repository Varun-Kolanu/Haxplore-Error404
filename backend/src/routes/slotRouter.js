import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { createSlots, updateSlot } from "../controllers/slotController.js";

const slotRouter = express.Router();

slotRouter.post("/", isAuthenticated, createSlots);
slotRouter.patch("/:id", isAuthenticated, updateSlot);

export default slotRouter;