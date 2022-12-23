const News = require("../models/News");

const postCreateService = (body) => News.create(body);

const postGetAllService = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const postsCountService = () => News.countDocuments();

const postTopNewService = () =>
  News.findOne().sort({ _id: -1 }).populate("user");

const postGetByIdService = (id) => News.findById(id).populate("user");

const postSearchService = (title) =>
  News.find({
    title: { $regex: `${title || ""}`, $options: "i" },
  })
    .sort({ _id: -1 })
    .populate("user");

const postByUserService = (id) =>
  News.find({
    user: id,
  })
    .sort({ _id: -1 })
    .populate("user");

const postUpdateService = (id, title, text, banner) =>
  News.findByIdAndUpdate({ _id: id }, { title, text, banner });

const postDeleteService = (id) => News.findByIdAndDelete({ _id: id });

const postLikeService = (idNews, userId) =>
  News.findOneAndUpdate(
    // Primeiro pega o Post pelo ID
    // Dentro do post, vai no array de likes e verifica se o ID do usuário is not in
    { _id: idNews, "likes.userId": { $nin: [userId] } },
    // Se não tiver o usuário, adiciona o id, e a data do like
    { $push: { likes: { userId, createdAt: new Date() } } }
  );

const postRemoveLikeService = (idNews, userId) =>
  News.findOneAndUpdate({ _id: idNews }, { $pull: { likes: { userId } } });

const postAddCommentService = (idNews, comment, userId) => {
  const idComment = Math.floor(Date.now() * Math.random()).toString(36);
  return News.findOneAndUpdate(
    { _id: idNews },
    {
      $push: {
        comments: { idComment, userId, comment, createdAt: new Date() },
      },
    }
  );
};

const postDeleteCommentService = (idNews, idComment, userId) =>
  News.findOneAndUpdate(
    { _id: idNews },
    { $pull: { comments: { idComment, userId } } }
  );

module.exports = {
  postCreateService,
  postGetAllService,
  postsCountService,
  postTopNewService,
  postGetByIdService,
  postSearchService,
  postByUserService,
  postUpdateService,
  postDeleteService,
  postLikeService,
  postRemoveLikeService,
  postAddCommentService,
  postDeleteCommentService,
};
