const userService = require("../services/userService");

const createUserController = async (req, res) => {
  // 1- Extrai os dados do corpo da Requisição
  const {
    name,
    username,
    email,
    password,
    profileImage,
    backgroundImage,
    about,
  } = req.body;

  // 3- E armazena o retorno em newUser // 2- Manda os dados para o Service
  const newUser = await userService.createUserService(req.body);

  // 4- Se o usuário não for criado por erros no servidor retorna o erro
  if (!newUser) {
    res
      .status(422)
      .json({ errors: ["Houve um erro, por favor tente mais tarde."] });
    return;
  }

  // 5- Se o usuário for criado, retorna o status, a mensagem e os dados
  res.status(201).send({
    message: "Usuário criado com sucesso!",
    user: {
      id: newUser._id,
      name,
      username,
      email,
      profileImage,
      backgroundImage,
      about,
    },
  });
};

const getAllUsersController = async (req, res) => {
  const users = await userService.getAllUsersService();
}

// 1°
// const userTestRoute = async (req, res) => {
//   res.send("Testando a rota => api/users/test");
// };

module.exports = {
  createUserController,
  getAllUsersController,
  // userTestRoute,
};
