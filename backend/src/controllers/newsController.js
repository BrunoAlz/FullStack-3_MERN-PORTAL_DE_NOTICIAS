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

    return res.status(200).send("Post Criado");
  } catch (error) {
    return res.status(500).send({ errors: error.message });
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

    return res.status(200).send({
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

const postTopController = async (req, res) => {
  try {
    const topNew = await newsService.postTopNewService();

    if (!topNew) {
      return res.status(404).send({ errors: "Nehuma postagem até o momento" });
    }

    return res.status(200).send({
      topNew: {
        id: topNew._id,
        title: topNew.title,
        text: topNew.text,
        banner: topNew.banner,
        likes: topNew.likes,
        comments: topNew.comments,
        name: topNew.user.name,
        userName: topNew.user.username,
        profileImage: topNew.user.profileImage,
      },
    });
  } catch (error) {
    return res.status(404).send({ errors: error.message });
  }
};

const postGetByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const newId = await newsService.postGetByIdService(id);

    return res.status(200).send({
      new: {
        id: newId._id,
        title: newId.title,
        text: newId.text,
        banner: newId.banner,
        likes: newId.likes,
        comments: newId.comments,
        name: newId.user.name,
        userName: newId.user.username,
        profileImage: newId.user.profileImage,
      },
    });
  } catch (error) {
    return res.status(500).send({ errors: error.message });
  }
};

const postSearchController = async (req, res) => {
  try {
    const { title } = req.query;

    const news = await newsService.postSearchService(title);

    if (news.length === 0) {
      return res
        .status(40)
        .send({ errors: "Não existes posts com esse título" });
    }

    return res.send({
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
    return res.status(500).send({ errors: error.message });
  }
};

const postByUserController = async (req, res) => {
  try {
    const news = await newsService.postByUserService(req.userId);

    return res.send({
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

const postUpdateController = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    const { id } = req.params;

    if (!title && !text && !banner) {
      return res.status(400).send({
        errors: "Você atualizar pelo menos um dos campos.",
      });
    }

    const news = await newsService.postGetByIdService(id);
    if (news.user.id != req.userId) {
      return res.status(400).send({
        errors: "Você não pode atualizar esta Postagem.",
      });
    }

    await newsService.postUpdateService(id, title, text, banner);

    return res.status(200).send("Post Atualizado com successo!.");
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

const postDeleteController = async (req, res) => {
  try {
    const { id } = req.params;

    const news = await newsService.postGetByIdService(id);

    if (news.user.id != req.userId) {
      return res.status(400).send({
        errors: "Você não pode Deletar esta Postagem.",
      });
    }

    await newsService.postDeleteService(id);
    return res.status(200).send("Post Deletado com successo!.");
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

const postLikeController = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const postLike = await newsService.postLikeService(id, userId);

    if (!postLike) {
      await newsService.postRemoveLikeService(id, userId);
      return res.status(200).send({ message: "Curtida Removida." });
    }
    
    res.status(200).send({ message: "Post Curtido." });
  } catch (error) {
    res.status(500).send({ errors: error.message });
  }
};

module.exports = {
  postCreateController,
  postGetAllController,
  postTopController,
  postGetByIdController,
  postSearchController,
  postByUserController,
  postUpdateController,
  postDeleteController,
  postLikeController,
};
