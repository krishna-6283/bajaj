import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  weight: { type: Number },
  height: { type: Number },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export const User = mongoose.model('User', userSchema);
