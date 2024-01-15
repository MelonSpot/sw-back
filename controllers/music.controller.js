const MusicService = require("../services/music.service");

class MusicController {
    musicService = new MusicService();

    getAll = async (req, res) => {
        let result = await this.musicService.getAll();
        return res.send({ result });
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
