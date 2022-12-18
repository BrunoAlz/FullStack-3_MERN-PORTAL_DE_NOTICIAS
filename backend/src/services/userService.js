const User = require("../models/User");

// Cria o usuário no Banco
const createUserService = (body) => User.create(body);

// Busca todos os usuários do Banco
const getAllUsersService = () => User.find();

// 5- Recebe o Id passado pelo Controller // 6- Busca o usário no Banco pelo id
const getUserByIdService = (id) => User.findById(id);

// 5- Recebe o Id passado pelo Controller e validado pelo Middleware
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
  // 6- Busca o usário no Banco pelo id e Faz o Update
  User.findByIdAndUpdate(
    { _id: id },
    { name, username, email, password, profileImage, backgroundImage, about }
  );

module.exports = {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
};
