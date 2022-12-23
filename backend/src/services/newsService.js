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
  News.findByIdAndUpdate(
    // Primeiro pega o Post pelo ID
    // Dentro do post, vai no array de likes e verifica se o ID do usuário is not in
    { _id: idNews, "likes.userId": {$nin: [userId]} },
    // Se não tiver o usuário, adiciona o id, e a data do like
    { $push: { likes: { userId, createdAt: new Date() } } }
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
};
