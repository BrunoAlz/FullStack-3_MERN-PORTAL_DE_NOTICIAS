const router = require("express").Router();

const userController = require("../controllers/userController");

router.post("/Register", userController.createUserController);
router.get("/List", userController.getAllUsersController);


// 2°
// const { userTestRoute } = require("../controllers/userController");

// 3°
// router.get("/test", userTestRoute);

module.exports = router;
