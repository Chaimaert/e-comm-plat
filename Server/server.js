import  express  from "express";
import products from "./data/Products.js";

const app = express();

// To load products from the server
app.get("/api/products", (req, res) => {
  res.json(products);
})

// single product from the server
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
})

app.get("/", (req,res) => {
  res.send("API is Running ...");
})

app.listen(5000,console.log("Server is Running port 5000 ..."))