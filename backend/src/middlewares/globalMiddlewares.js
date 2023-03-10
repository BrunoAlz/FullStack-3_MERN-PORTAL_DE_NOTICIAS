const mongoose = require("mongoose");
const userService = require("../services/userService");

const validateIdMiddleware = (req, res, next) => {
  try {
    // 1- Recupera o Id passado na Requisição
    const id = req.params.id;
    // 2 Verifica se o Id da está correto
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ errors: ["Id de usuário incorreto."] });
    }
    next();
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

const validateUserMiddleware = async (req, res, next) => {
  try {
    // 1- Recupera o Id passado na Requisição
    const id = req.params.id;
    // 2- Verifica se o Usuário existe
    const user = await userService.getUserByIdService(id);
    if (!user) {
      return res.status(404).json({ errors: ["Este usuário não existe."] });
    }
    // Guarda os dados buscados na requisição atual e passa para a próxima
    // evitando que seja necessário buscar esses dados novamente.
    req.id = id;
    req.user = user;

    next();
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

module.exports = {
  validateIdMiddleware,
  validateUserMiddleware,
};
