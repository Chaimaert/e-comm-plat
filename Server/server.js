import  express  from "express";
import products from  "./data/Productss.js"

const app = express();

// To load products from the server
app.get("/api/products", (req,res) => {
  res.json(products)
})

app.get("/", (req,res) => {
  res.send("API is Running ...");
})

app.listen(5000,console.log("Server is Running port 5000 ..."))