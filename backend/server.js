require("dotenv").config();

const port = process.env.PORT;
const express = require("express");

const app = express();

const router = require("./routes/Router.js");
app.use(router);

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta ${port}!`);
});
