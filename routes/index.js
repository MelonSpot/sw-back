const express = require("express");
const router = express.Router();

// 라우터 구성
const userRouter = require("./user.routes");
const musicRouter = require("./music.routes");
const playListRouter = require("./playList.routes");

router.use("/user", userRouter.router);
router.use("/music", musicRouter.router);
router.use("/playlist", playListRouter.router);

module.exports = router;
