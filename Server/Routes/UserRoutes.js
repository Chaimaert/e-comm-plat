import express from "express";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js"

const userRoute =  express.Router();

// Login
productRoute.get(
  "/login", 
  asyncHandler(
  async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (condition) {
      
    }
  })
);


export default userRoute;