const User = require("../models/User");

// Cria o usuário no Banco
const createUserService = (body) => User.create(body);

// Busca todos os usuários do Banco
const getAllUsersService = () => User.find().select("-password");

// 5- Recebe o Id passado pelo Controller // 6- Busca o usário no Banco pelo id
const getUserByIdService = (id) => User.findById(id).select("-password");

module.exports = {
  createUserService,
  getAllUsersService,
  getUserByIdService,
};
