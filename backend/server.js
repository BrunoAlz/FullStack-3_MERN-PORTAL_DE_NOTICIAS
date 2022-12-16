const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello ");
});

console.log("Servidor Rodando na Porta 3000!");

app.listen(3000);
