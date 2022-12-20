const userService = require("../services/userService");

const createUserController = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

const getAllUsersController = async (req, res) => {
  try {
    const users = await userService.getAllUsersService();

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

const getUserByIdController = async (req, res) => {
  try {
    // 1- Recupera o usuário passado pelo Middleware
    const user = req.user;

    // 2-  retorna a response para o front
    res.send(user);
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

const updateUserController = async (req, res) => {
  try {
    // 1- Recupera o Id na requisição, passado pelo Middleware
    const { id, user } = req;
    // 2 - Recupera os dados da Requisição
    const {
      name,
      username,
      email,
      password,
      profileImage,
      backgroundImage,
      about,
    } = req.body;

    // 3- O Middleware valida o Id aqui no meio da Requisição

    // 4- Apos a validação pelo middleware os dados é passado apra o service
    await userService.updateUserService(
      id,
      name,
      username,
      email,
      password,
      profileImage,
      backgroundImage,
      about
    );

    res.status(200).send({ message: "Usuário atualizado com Sucesso!" });
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

// 1°
// const userTestRoute = async (req, res) => {
//   res.send("Testando a rota => api/users/test");
// };

module.exports = {
  createUserController,
  getAllUsersController,
  getUserByIdController,
  updateUserController,
  // userTestRoute,
};
