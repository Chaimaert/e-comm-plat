import  express  from "express";
import  products  from "./data/Products.js";

const app = express();

// To load products from the server
app.get("/api/products", (req, res) => {
  res.json(products);
})

// single product from the server
app.get("/api/product", (req, res) => {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS1.find((p) => p.id === productId);
})

app.get("/", (req,res) => {
  res.send("API is Running ...");
})

app.listen(5000,console.log("Server is Running port 5000 ..."))