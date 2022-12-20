const newsService = require("../services/newsService");

const postCreateController = async (req, res) => {
  try {
    const { title, body, banner } = req.body;

    if (!title || !banner || !body) {
      res.status(400).send({ errors: "Preencha todos os campos" });
    }

    await newsService.postCreateService({
      title,
      body,
      banner,
      id: "1"
    })
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

const postGetAllController = (req, res) => {
  try {
    res.send("lista post ok");
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

module.exports = {
  postCreateController,
  postGetAllController,
};
