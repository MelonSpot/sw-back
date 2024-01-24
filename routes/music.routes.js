const express = require("express");
const router = express.Router();

const MusicController = require("../controllers/music.controller");
const musicController = new MusicController();

router.get("/", musicController.getAll);
router.post("/:musicId", musicController.getOne);
router.get("/:tagName", musicController.getByTag);

module.exports = {
    router,
};
