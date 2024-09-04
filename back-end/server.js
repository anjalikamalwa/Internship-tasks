import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./dbconfig/dbconnection.js";
import { router } from "./routes/contactRoute.js";

const result = dotenv.config();

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/message", router);


const port = process.env.PORT || 4000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
