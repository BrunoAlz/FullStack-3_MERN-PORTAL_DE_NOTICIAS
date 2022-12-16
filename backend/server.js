const express = require("express");
const app = express();

require("dotenv").config();

const port = process.env.PORT;

const router = require("./src/routes/Routes");
app.use(router);

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta ${port}!`);
});
