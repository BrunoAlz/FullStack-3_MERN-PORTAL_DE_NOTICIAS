const router = require("express").Router();

const { createUser } = require("../controllers/userController");

router.post("/Register", createUser);

// 2°
// const { userTestRoute } = require("../controllers/userController");

// 3°
// router.get("/test", userTestRoute);

module.exports = router;
