const express = require("express");
const authController = require("../controller/auth.controller");

const router = express.Router();
const ans = 3;

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

module.exports = router;
