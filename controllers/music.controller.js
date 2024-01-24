const MusicService = require("../services/music.service");

class MusicController {
    musicService = new MusicService();

    getAll = async (req, res) => {
        try {
            const musicList = await this.musicService.getAll();
            return res.status(200).json(musicList);
        } catch {
            console.log(error);
            return res.status(error.statusCode).json({
                message: error.message,
            });
        }
    };

    getOne = async (req, res) => {
        try {
            const musicId = req.params.musicId;
            const music = await this.musicService.getOne(musicId);
            return res.status(200).json(music);
        } catch {
            console.log(error);
            return res.status(error.statusCode).json({
                message: error.message,
            });
        }
    };

    getByTag = async (req, res) => {
        let result = await this.musicService.getByTag();
        return res.send({ result });
    };
}

module.exports = MusicController;
