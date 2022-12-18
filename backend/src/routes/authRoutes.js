const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/Login", authController.loginController);

module.exports = router;