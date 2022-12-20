const express = require("express");
const router = express();

// Aqui serão importadas as Rotas das "APIs"
router.use("/Api/Users", require("./userRoutes")); // 4° Importando as Rotas do Usuário:
router.use("/Api/Users/Auth", require("./authRoutes")); // 5° Importando as Rotas de Authenticação:
router.use("/Api/Users/Posts", require("./newsRoutes")); // 5° Importando as Rotas de Authenticação:

router.get("/", (req, res) => {
  res.send("API WORKING");
});

module.exports = router;
