const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const token = process.env.JWT_SECRET;

const loginService = (email) =>
  User.findOne({ email: email }).select("+password");

const generateTokenService = (id) =>
  jwt.sign({ id: id }, token, { expiresIn: 86400 });

module.exports = {
  loginService,
  generateTokenService,
};
