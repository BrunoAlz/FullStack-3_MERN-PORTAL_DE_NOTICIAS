const userTestRoute = async (req, res) => {
  res.send("Testando a rota => api/users/test");
};

module.exports = {
  userTestRoute,
};
