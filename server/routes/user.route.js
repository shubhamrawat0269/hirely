const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");

// create user
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.post("/update-profile", userController.updateProfile);

module.exports = router;
