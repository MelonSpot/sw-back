const MusicRepository = require("../repositories/music.repository");

class MusicService {
    musicRepository = new MusicRepository();

    getAll = async () => {
        const type = "all";
        const musicList = await this.musicRepository.getMusic(type);
        return musicList;
    };

    getOne = async () => {
        return await this.musicRepository.getMusic();
    };

    getByTag = async () => {
        return await this.musicRepository.getMusic();
    };
}

module.exports = MusicService;
