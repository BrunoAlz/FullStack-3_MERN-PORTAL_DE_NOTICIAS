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
};
