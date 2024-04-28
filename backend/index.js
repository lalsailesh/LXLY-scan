import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import Logging from "./lib/Logging.js";

import transactionRoutes from "./routes/transaction.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(transactionRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    Logging.info("MongoDB Connected");
  })
  .catch((err) => {
    Logging.info(err);
  });

app.listen(8080, () => {
  Logging.info("Server started at port 8080");
});
