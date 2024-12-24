const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const { userMiddleware } = require("../middleware");

// create user
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.post(
  "/update-profile",
  userMiddleware.isAuthenticated,
  userController.updateProfile
);

module.exports = router;
