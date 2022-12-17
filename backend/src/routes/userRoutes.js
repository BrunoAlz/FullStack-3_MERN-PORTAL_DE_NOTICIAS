const router = require("express").Router();
const {
  validateIdMiddleware,
  validateUserMiddleware,
} = require("../middlewares/globalMiddlewares");
const validate = require("../middlewares/handleValidationsErrors");
const userController = require("../controllers/userController");

router.post("/Register", userController.createUserController);
router.get("/List", userController.getAllUsersController);
router.get(
  "/:id",
  validateIdMiddleware,
  validateUserMiddleware,
  userController.getUserByIdController
);
router.patch(
  "/Atualizar/:id",
  validateIdMiddleware,
  validateUserMiddleware,
  userController.updateUserController
);

// 2°
// const { userTestRoute } = require("../controllers/userController");

// 3°
// router.get("/test", userTestRoute);

module.exports = router;
