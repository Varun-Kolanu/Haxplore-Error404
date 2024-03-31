import express from "express";
import mongoose from "mongoose";
import "./config.js"
console.log(process.env.OPENAI_API_KEY);
import dev_populatedata from "./dev_populatedata.js";
import eventRouter from "./routes/eventRouter.js";
import ticketRouter from "./routes/ticketRouter.js";
import chatRouter from "./routes/chatRouter.js";
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/events", eventRouter);
app.use("/tickets", ticketRouter);
app.use("/chat", chatRouter);

app.listen(port, () => {
	console.log(`Express is listening at http://localhost:${port}`);
});

if(process.env.NODE_ENV === "dev")
dev_populatedata();
