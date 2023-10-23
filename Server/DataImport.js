import express from "express";
import User from './Models/UserModel';
import users from './data/users';

const ImportData = express.Router()

ImportData.post("/user", async (req,res)=> {
  await User.Remove({});
  const importUser = await User.insertMany(users);
  res.send({ importUser });
});