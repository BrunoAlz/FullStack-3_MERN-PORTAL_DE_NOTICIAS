const User = require("../models/User");

// Cria o usuário no Banco
const create = (body) => User.create(body);

module.exports = {
  create,
};
