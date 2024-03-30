import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dev_populatedata from "./dev_populatedata.js";
dotenv.config();
const app = express();
const port = 3000;


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {

});


app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Express is listening at http://localhost:${port}`);
});

dev_populatedata();