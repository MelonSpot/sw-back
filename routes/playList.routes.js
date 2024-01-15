const express = require("express");
const router = express.Router();

const PlayListController = require("../controllers/playList.controller");
const playListController = new PlayListController();

router.get("/signup", playListController.getUserPlayList);
router.get("/signin", playListController.getTagPlayList);
router.put("/addlike/:musicId", playListController.putUserPlayList);

module.exports = {
    router,
};
