const router = require("express").Router();

const newsController = require("../controllers/newsController");
const { authMiddleware } = require("../middlewares/authMiddlewares");

router.post("/Create", authMiddleware, newsController.postCreateController);
router.get("/List", newsController.postGetAllController);

module.exports = router;
