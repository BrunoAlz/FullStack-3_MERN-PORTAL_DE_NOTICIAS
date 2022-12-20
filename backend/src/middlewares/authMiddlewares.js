const jwt = require("jsonwebtoken");
require("dotenv").config();
const token = process.env.JWT_SECRET;

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
	
	  jwt.verify(token, token, (error, decoded) => {
      if (error) {
        return res.status(401).send({errors: "Token Inválido"})
      }
	  })
	
	  next();
} catch (error) {
  return res.send(500);	
}
};

module.exports = {
  authMiddleware
}