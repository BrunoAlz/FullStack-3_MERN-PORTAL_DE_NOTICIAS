const router = require("express").Router();

const newsController = require("../controllers/newsController");
const { authMiddleware } = require("../middlewares/authMiddlewares");

router.post("/Create", authMiddleware, newsController.postCreateController);
router.get("/List", newsController.postGetAllController);
router.get("/Top", newsController.postTopController);
router.get("/Search", newsController.postSearchController);
router.get("/ByUser", authMiddleware, newsController.postByUserController);

router.get("/:id", newsController.postGetByIdController);
router.patch(
  "/Atualizar/:id",
  authMiddleware,
  newsController.postUpdateController
);
router.delete(
  "/Deletar/:id",
  authMiddleware,
  newsController.postDeleteController
);


module.exports = router;
