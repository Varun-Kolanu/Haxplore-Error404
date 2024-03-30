import express from "express";
import { config } from "dotenv";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleStrategyHandler } from "./controllers/auth.js";
import session from "express-session";
import { User } from "./models/user.js";
import 'express-async-errors';

export const app = express();
config();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ["*"],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        credentials: true,
    }));
app.use(session({
    secret: process.env.SECRET_KEY,
    saveUninitialized: true,
    resave: false
}));
app.use(passport.initialize());
app.use(passport.session())

passport.serializeUser(async (userPromise, done) => {
    const user = await userPromise;
    done(null, user._id);
});

passport.deserializeUser(async function (id, done) {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/auth/google/callback'
}, googleStrategyHandler));

//using routes
app.use("/api/auth", authRouter);

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use(errorMiddleware);
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});
