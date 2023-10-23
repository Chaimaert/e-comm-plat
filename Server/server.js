import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";

dotenv.config();
connectDatabase();

const app = express();

// Enable CORS for all routes
app.use(cors());

// API
app.use("/api/import", ImportData)


app.get("/", (req, res) => {
  res.send("API is Running ...");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server run in port ${PORT}`));
