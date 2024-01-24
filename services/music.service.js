const MusicRepository = require("../repositories/music.repository");

class MusicService {
    musicRepository = new MusicRepository();

    getAll = async () => {
        const type = "all";
        const musicList = await this.musicRepository.getMusic(type);
        return musicList;
    };

    getOne = async (musicId) => {
        const music = await this.musicRepository.getMusic(musicId);
        return music;
    };

    getByTag = async () => {
        return await this.musicRepository.getMusic();
    };
}

module.exports = MusicService;
