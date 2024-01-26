const MusicRepository = require("../repositories/music.repository");

class MusicService {
    musicRepository = new MusicRepository();

    getAll = async () => {
        const musicList = await this.musicRepository.getMusic({ type: "all" });

        const allMusic = musicList.map((music) => {
            return {
                musicId: music._id,
                coverImage: music.coverImage,
                title: music.title,
                artist: music.artist,
                url: music.url,
                tags: music.tags,
            };
        });

        return allMusic;
    };

    getOne = async (musicId) => {
        const music = await this.musicRepository.getMusic({ type: "_id", musicId });

        if (!music) {
            throw new CustomError("해당 아이디의 음악이 조회되지 않습니다.", 404);
        }

        const oneMusic = {
            musicId: music._id,
            coverImage: music.coverImage,
            title: music.title,
            artist: music.artist,
            url: music.url,
            tags: music.tags,
        };

        return oneMusic;
    };

    getByTag = async (tagName) => {
        const musicList = await this.musicRepository.getMusic({ type: "tag", tagName });

        if (!musicList) {
            throw new CustomError("해당 태그의 음악이 조회되지 않습니다.", 404);
        }

        const tagedMusic = musicList.map((music) => {
            return {
                musicId: music._id,
                coverImage: music.coverImage,
                title: music.title,
                artist: music.artist,
                url: music.url,
                tags: music.tags,
            };
        });

        return tagedMusic;
    };
}

module.exports = MusicService;
