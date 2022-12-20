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
      user: req.userId,
    });

    res.status(200).send("Post Criado");
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

const postGetAllController = async (req, res) => {
  try {
    // Recupera os parametros da URL
    let { limit, offset } = req.query;
    // Converte para Inteiro
    limit = Number(limit);
    offset = Number(offset);
    // Se não tiver parametros seta o padrão
    if (!limit) {
      limit = 5;
    }
    // Se não tiver parametros seta o padrão
    if (!offset) {
      offset = 0;
    }

    // faz a query, passando os parametros
    const news = await newsService.postGetAllService(offset, limit);
    // faz a query para recuperar o total de posts
    const total = await newsService.postsCountService();
    // recupera a url atual
    const currentUrl = req.baseUrl;

    // monta a nova URL com a paginação dinâmica
    const next = offset + limit;
    nextUrl =
      next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

    // monta a Url anterior com a paginação anterior
    const previous = offset - limit < 0 ? null : offset - limit;
    const previousUrl =
      previous != null
        ? `${currentUrl}?limit=${limit}&offset=${previous}`
        : null;

    if (news.lenght === 0) {
      return res.status(400).send({ errors: "Nehuma postagem até o momento" });
    }

    res.status(200).send({
      nextUrl,
      previousUrl,
      limit,
      offset,
      total,

      resuts: news.map((newsItem) => ({
        id: newsItem._id,
        title: newsItem.title,
        text: newsItem.text,
        banner: newsItem.banner,
        likes: newsItem.likes,
        comments: newsItem.comments,
        name: newsItem.user.name,
        userName: newsItem.user.username,
        profileImage: newsItem.user.profileImage,
      })),
    });
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

module.exports = {
  postCreateController,
  postGetAllController,
};
