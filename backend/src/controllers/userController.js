const userService = require("../services/userService");

const createUser = async (req, res) => {
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
  const newUser = await userService.create(req.body);

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

// 1°
// const userTestRoute = async (req, res) => {
//   res.send("Testando a rota => api/users/test");
// };

module.exports = {
  createUser,
  // userTestRoute,
};
