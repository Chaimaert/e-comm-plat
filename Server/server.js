import  express  from "express";
// import Products from  "./data/products"

const app = express();

// To load products from the server
// app.get("/api/products", (req, res) => {
//   res.json(Products);
// })

app.get("/", (req,res) => {
  res.send("API is Running ...");
})

app.listen(5000,console.log("Server is Running port 5000 ..."))