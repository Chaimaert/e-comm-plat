import express from "express";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";

const userRouter = express.Router();

// Login
userRouter.get(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: null,
        createAt: user.createAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Password");
    }
  })
);

export default userRouter;
