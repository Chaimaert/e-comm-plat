import  express  from "express";
import cors from 'cors'; 
import products from "./data/Products.js";
import dotenv from "dotenv";


dotenv.config()

const app = express();

// Enable CORS for all routes
app.use(cors());

// To load products from the server
app.get("/api/products", (req, res) => {
  res.json(products);
})

// single product from the server
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  res.json(product);
})

app.get("/", (req,res) => {
  res.send("API is Running ...");
})

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server run in port ${PORT}`))