const User = require("../models/User");

// Cria o usuário no Banco
const createUserService = (body) => User.create(body);

// Busca todos os usuários do Banco
const getAllUsersService = () => User.find().select("-password");

// 5- Recebe o Id passado pelo Controller // 6- Busca o usário no Banco pelo id
const getUserByIdService = (id) => User.findById(id).select("-password");

// 5- Recebe o Id passado pelo Controller // 6- Busca o usário no Banco pelo id e Faz o Update
const updateUserService = (
  id,
  name,
  username,
  email,
  password,
  profileImage,
  backgroundImage,
  about
) =>
  User.findByIdAndUpdate(
    { _id: id },
    { name, username, email, password, profileImage, backgroundImage, about }
  ).select("-password");

module.exports = {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
};
