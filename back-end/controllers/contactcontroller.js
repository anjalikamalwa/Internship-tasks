import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import { Contact } from "../models/contactModel.js";
// @desc  message
// @route POST /api/message
// @access public
export const sentMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    message,
  });
  res.json({ message: "Message sent successfully" });
});
