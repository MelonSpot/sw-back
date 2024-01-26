const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");

const PlayListController = require("../controllers/playList.controller");
const playListController = new PlayListController();

router.put("/addlike/:musicId", authMiddleware, playListController.putUserPlayList);

module.exports = {
    router,
};
