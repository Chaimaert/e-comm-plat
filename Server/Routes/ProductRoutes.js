import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js"

const productRoute =  express.Router();

productRoute.get(
  "/", 
  asyncHandler(
  async(req, res) => {
    const products = await Product.find({});
    res.json(products);
  })

);

export default productRoute;