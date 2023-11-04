import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    console.log("Token Found");
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export default protect;
