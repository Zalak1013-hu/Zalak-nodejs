import { validationResult } from "express-validator";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const result = validationResult(req);

    if (!error.isEmpty()) {
      return res.json(errorr.array());
    }

    const user = await User.create(req.body);

    console.log("user created id:", user.id);

    return res.json(user);
  } catch (error) {
    console.log(error.message);
    return res.json({ message: error.message });
  }
};

export const getAlluser = async (req, res) => {
  try {
    const Search = req.query.Search || "";

    const data = await User.find({ username: { $regex: Search, $options: "i" }});

    return res.json(data);
  } catch (error) {
    console.log(error.message);
    return res.json({ message: error.message });
  }
};

export const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findByIdAndDelete(id);
    return res.json({ message: "user deleted", userId: data.id });
  } catch (error) {
    console.log(error.message);
    return res.json({ message: error.message });
  }
};

export const updateuser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findByIdAndUpdate(id);
    return res.json({ message: "user update", userId: data.id });
  } catch (error) {
    console.log(error.message);
    return res.json({ message: error.message });
  }
};
