import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  phonenumber: Number,
  password: String,
})

const User = new mongoose.model('user', userSchema);

export default User;