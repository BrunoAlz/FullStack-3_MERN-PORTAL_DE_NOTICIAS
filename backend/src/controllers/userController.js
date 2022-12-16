const createUser = async (req, res) => {
  const user = await req.body;
  res.json(user);
};

// 1°
// const userTestRoute = async (req, res) => {
//   res.send("Testando a rota => api/users/test");
// };

module.exports = {
  createUser,
  // userTestRoute,
};
