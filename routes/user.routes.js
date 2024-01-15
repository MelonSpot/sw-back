const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const userController = new UserController();

router.post("/signup", userController.signUp);
router.post("/signin", userController.signIn);
router.get("/userinfo", userController.userInfo);

module.exports = {
    router,
};
