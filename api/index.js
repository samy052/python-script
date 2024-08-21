import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT;

mongoose
  .connect("mongodb://127.0.0.1:27017/PythonScript")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch(() => {
    console.log("error");
  });

app.use("/api/auth", authRouter);

app.get("/", (req,res) => {
  res.send("😂");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
