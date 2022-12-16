const router = require("express").Router();

// Controller
const { userTestRoute } = require("../controllers/userController");

// Routes
router.get("/test", userTestRoute);

module.exports = router;
