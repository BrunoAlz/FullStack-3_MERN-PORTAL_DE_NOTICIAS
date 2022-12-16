const mongoose = require("mongoose").set("strictQuery", false);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

// Conexão com o Banco de Dados MongoDB
const databaseConnect = async () => {
  try {
    const dbConn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@noticias.orjzglr.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectou ao Banco!");
    return dbConn;
  } catch (error) {
    console.log(error);
  }
};

databaseConnect();

module.exports = databaseConnect;
