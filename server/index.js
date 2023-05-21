import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { dbConnection } from "./config/dbConnection.js";
import signup from "./routes/public/signup.js";

const app = express();
const localhost = process.env.HOST;
const port = process.env.PORT;

// database
dbConnection();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use('/signup', signup)

mongoose.connection.once("open", () => {
  // console.log(`Database connected successfully`);
  app.listen(port, () => console.log(`server listening on ${localhost}${port}`));
});
