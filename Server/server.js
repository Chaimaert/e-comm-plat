import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";

dotenv.config();
connectDatabase();

const app = express();

// Enable CORS for all routes
app.use(cors());

const corsOptions = {
  origin: 'http://localhost:5000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

// Enable CORS using these options
app.use(cors(corsOptions));

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);


app.get("/", (req, res) => {
  res.send("API is Running ...");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server run in port ${PORT}`));
