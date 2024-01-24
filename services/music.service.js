const MusicRepository = require("../repositories/music.repository");

class MusicService {
    musicRepository = new MusicRepository();

    getAll = async () => {
        const type = "all";
        const musicList = await this.musicRepository.getMusic({ type });
        return musicList;
    };

    getOne = async (musicId) => {
        const type = "_id";
        const music = await this.musicRepository.getMusic({ type, musicId });
        return music;
    };

    getByTag = async (tagName) => {
        const type = "tag";
        const music = await this.musicRepository.getMusic({ type, tagName });
        return music;
    };
}

module.exports = MusicService;
