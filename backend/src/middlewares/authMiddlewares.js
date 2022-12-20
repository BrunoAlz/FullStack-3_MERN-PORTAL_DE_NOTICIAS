const jwt = require("jsonwebtoken");
require("dotenv").config();
const jwt_secret = process.env.JWT_SECRET;

const userService = require("../services/userService");

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.status(401);
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.send(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.send(401);
    }

    jwt.verify(token, jwt_secret, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ errors: "Token Inválido" });
      }

      const user = await userService.getUserByIdService(decoded.id);
      if (!user || !user.id) {
        return res.status(401).send({ errors: "Token Inválido" });
      }

      req.userId = user;
    });

    next();
  } catch (error) {
    return res.send(500);
  }
};

module.exports = {
  authMiddleware,
};
