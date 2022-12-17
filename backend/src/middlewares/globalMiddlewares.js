const mongoose = require("mongoose");
const userService = require("../services/userService");

const validateIdMiddleware = (req, res, next) => {
  // 1- Recupera o Id passado na Requisição
  const id = req.params.id;
  // 2 Verifica se o Id da está correto
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ errors: ["Este usuário não existe."] });
  }
  next();
};

const validateUserMiddleware = async (req, res, next) => {
  // 1- Recupera o Id passado na Requisição
  const id = req.params.id;
  // 2- Verifica se o Usuário existe
  const user = await userService.getUserByIdService(id);
  if (!user) {
    return res.status(404).json({ errors: ["Este usuário não existe."] });
  }
  next();
};

module.exports = {
  validateIdMiddleware,
  validateUserMiddleware,
};
