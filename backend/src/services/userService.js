const User = require("../models/User");

// Cria o usuário no Banco
const createUserService = (body) => User.create(body);

module.exports = {
  createUserService,
};
