require("dotenv").config();
const port = process.env.PORT;

const express = require("express");
const app = express();

// Configurando a Conexão com o BD
const databaseConnect = require("./src/database/db");

// Configuração das Respostas em JSON e Form data
app.use(express.json());

const router = require("./src/routes/Routes");
app.use(router);

app.listen(port, () => {
  console.log(`Servidor Rodando na Porta ${port}!`);
});
