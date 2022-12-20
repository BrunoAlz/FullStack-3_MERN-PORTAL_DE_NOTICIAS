const mongoose = require("mongoose");
const { Schema } = mongoose;

// Criando o SCHEMA de USER, Serve como blueprint para o Model
const NewsSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  banner: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  likes: { type: Array, require: true },
  comments: { type: Array, require: true },
});

// Criando o model no MongoDB
const News = mongoose.model("News", NewsSchema);
module.exports = News;
