const router = require("express").Router();

const userController = require("../controllers/userController");

router.post("/Register", userController.createUserController);
router.post("/List", userController.getAllUsersController);


// 2°
// const { userTestRoute } = require("../controllers/userController");

// 3°
// router.get("/test", userTestRoute);

module.exports = router;
