const newsService = require("../services/newsService");

const postCreateController = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      return res.status(400).send({ errors: "Preencha todos os campos" });
    }

    await newsService.postCreateService({
      title,
      text,
      banner,
      user: { _id: "639d2a7387e3c9bddcef459c" },
    });

    res.status(200).send("Post Criado");
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

const postGetAllController = async (req, res) => {
  try {
    
    const news = await newsService.postGetAllService();
    if (news.lenght === 0) {
      return res.status(400).send({ errors: "Nehuma postagem até o momento" });
    }

    res.status(200).send(news);
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

module.exports = {
  postCreateController,
  postGetAllController,
};
