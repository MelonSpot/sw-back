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
        let result = await this.musicService.getOne();
        return res.send({ result });
    };

    getByTag = async (req, res) => {
        let result = await this.musicService.getByTag();
        return res.send({ result });
    };
}

module.exports = MusicController;
