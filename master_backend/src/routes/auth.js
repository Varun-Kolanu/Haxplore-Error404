import express from "express";
import { authHandler } from "../controllers/auth.js";
import passport from "passport";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post('/google', passport.authenticate('google-token'), authHandler);

export default router;