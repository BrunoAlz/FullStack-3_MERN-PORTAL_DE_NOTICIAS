const mongoose = require("mongoose");
const { Schema } = mongoose;

// Criando o SCHEMA de USER, Serve como blueprint para o Model
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImage: { type: String, required: true },
    backgroundImage: { type: String, required: true },
    about: { type: String, required: false },
  },
  { timestamps: true }
);

// Criando o model no MongoDB
const User = mongoose.model("User", userSchema);
module.exports = User;
