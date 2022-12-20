const bcrypt = require("bcrypt");
const authService = require("../services/authService");

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authService.loginService(email);

    if (!user) {
      return res.status(404).send({ errors: "Credenciais Inválidas" });
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(402).send({ errors: "Credenciais Inválidas" });
    }

    const token = authService.generateTokenService(user._id);

    res.send({ user, token });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = {
  loginController,
};
