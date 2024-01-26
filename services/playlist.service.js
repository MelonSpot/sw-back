const PlayListRepository = require("../repositories/playList.repository");

class PlayListService {
    playListRepository = new PlayListRepository();

    addPlayList = async (userId, musicId) => {
        const type = "add";
        const playList = await this.playListRepository.putPlayList({
            userId,
            musicId,
            type,
        });
        return playList;
    };

    deletePlayList = async (userId, musicId) => {
        const type = "delete";
        const playList = await this.playListRepository.putPlayList({
            userId,
            musicId,
            type,
        });
        return playList;
    };
}

module.exports = PlayListService;
