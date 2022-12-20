const postCreateController = (req, res) => {
  res.send("cria post ok");
};

const postGetAllController = (req, res) => {
  res.send("Lista todos os posts ok");
};

module.exports = {
  postCreateController,
  postGetAllController,
};
