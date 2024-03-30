import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/user.js";
import { sendJwt } from "../utils/sendJwt.js";


export const googleStrategyHandler = async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ email: profile._json.email });
        if (user) return done(null, user);
        user = User.create({
            name: profile._json.name,
            email: profile._json.email,
            googleId: profile.id
        })
        return done(null, user);
    } catch (error) {
        return done(error, null);
    }
}

export const authHandler = async (req, res) => {
    if (!req.user) return next(new ErrorHandler("Error authenticating user", 401));
    sendJwt(await req.user, res, 200);
}
