const express = require("express");
const router = express();

// Aqui serão importadas as Rotas das "APIs"
router.use("/api/users", require("./userRoutes")); // 4° Importando as Rotas do Usuário:

router.get("/", (req, res) => {
  res.send("API WORKING");
});

module.exports = router;
