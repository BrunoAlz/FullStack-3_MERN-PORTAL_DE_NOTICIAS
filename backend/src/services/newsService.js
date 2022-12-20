const News = require("../models/News");

const postCreateService = (body) => News.create(body);

const postGetAllService = (offset, limit) =>
News.find().sort({ _id: -1 }).skip(offset).limit(limit).populate("user");

const postsCountService = () => News.countDocuments();

module.exports = {
  postCreateService,
  postGetAllService,
  postsCountService,
};
