import express from "express";
import User from './Models/UserModel';

const ImportData = express.Router()

ImportData.post("/user", (req,res)=> {
  await User.Remove({})
})