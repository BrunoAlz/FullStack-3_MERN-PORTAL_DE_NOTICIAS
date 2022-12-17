const User = require("../models/User");

// Cria o usuário no Banco
const createUserService = (body) => User.create(body);

// Busca todos os usuários do Banco
const getAllUsersService = () => User.find();

module.exports = {
  createUserService,
  getAllUsersService,
};
