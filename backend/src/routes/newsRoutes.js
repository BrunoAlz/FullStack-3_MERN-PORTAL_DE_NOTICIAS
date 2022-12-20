const router = require("express").Router();

const newsController = require("../controllers/newsController");

router.post("/Create", newsController.postCreateController);
router.get("/List", newsController.postGetAllController);

module.exports = router;
