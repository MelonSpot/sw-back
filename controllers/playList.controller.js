const PlayListService = require("../services/playlist.service");
const CustomError = require("../utils/error.util");

class PlayListController {
    playListService = new PlayListService();

    putUserPlayList = async (req, res) => {
        try {
            const userId = res.locals.user.userId;
            const musicId = req.params.musicId;

            if (!userId) {
                throw new CustomError("로그인 후 이용 가능한 기능입니다.", 401);
            }

            const playList = await this.playListService.addPlayList(userId, musicId);
            return res.status(200).json(playList);
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode).json({
                message: error.message,
            });
        }
    };

    deleteUserPlayList = async (req, res) => {
        return;
    };

    getTagPlayList = async (req, res) => {
        return;
    };
}

module.exports = PlayListController;
