const News = require("../models/News");

const postCreateService = (body) => News.create(body);

const postGetAllService = () => News.find();

module.exports = {
  postCreateService,
  postGetAllService,
};
