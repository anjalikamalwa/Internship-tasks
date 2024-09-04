import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the Contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email address"],
    },
    message: {
      type: String,
      required: [true, "Please write your message"],
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = mongoose.model("Contact", contactSchema);
