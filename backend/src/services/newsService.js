const News = require("../models/News");

const postCreateService = (body) => News.create(body);

const postGetAllService = (offset, limit) =>
  News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const postsCountService = () => News.countDocuments();

const postTopNewService = () =>
  News.findOne().sort({ _id: -1 }).populate("user");

const postGetByIdService = (id) => News.findById(id);

module.exports = {
  postCreateService,
  postGetAllService,
  postsCountService,
  postTopNewService,
  postGetByIdService,
};
