const MusicRepository = require("../repositories/music.repository");

class MusicService {
    musicRepository = new MusicRepository();

    getAll = async () => {
        return await this.musicRepository.getMusic();
    };

    getOne = async () => {
        return await this.musicRepository.getMusic();
    };

    getByTag = async () => {
        return await this.musicRepository.getMusic();
    };
}

module.exports = MusicService;
