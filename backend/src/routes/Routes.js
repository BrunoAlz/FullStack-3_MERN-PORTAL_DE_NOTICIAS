const express = require("express");
const router = express();

// Aqui serão importadas as Rotas das "APIs"
router.use("/Api/Users", require("./userRoutes")); // 4° Importando as Rotas do Usuário:
router.use("/Api/Users/Auth", require("./authRoutes"));
router.use("/Api/Posts", require("./newsRoutes")); 
router.use("/", require("./swaggerRouter")); 

router.get("/", (req, res) => {
  res.send("API WORKING");
});

module.exports = router;
