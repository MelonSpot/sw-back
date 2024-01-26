const PlayListRepository = require("../repositories/playList.repository");
const CustomError = require("../utils/error.util");

class PlayListService {
    playListRepository = new PlayListRepository();

    addPlayList = async (userId, musicId) => {
        const playList = await this.playListRepository.getPlayList({ userId });
        if (!playList) {
            throw new CustomError("플레이리스트가 조회되지 않음.", 404);
        }
        if (playList.musicIds.includes(musicId)) {
            throw new CustomError("플레이리스트에 이미 존재하는 곡입니다.", 402);
        }

        const processedPlayList = await this.playListRepository.putPlayList({
            type: "add",
            userId,
            musicId,
        });

        if (!processedPlayList) {
            throw new CustomError("playlist 변경에 실패했습니다.", 402);
        }

        const resultPlayList = {
            playListId: processedPlayList._id,
            userId: processedPlayList.userId,
            musicIds: processedPlayList.musicIds,
        };

        return resultPlayList;
    };

    deletePlayList = async (userId, musicId) => {
        const playList = await this.playListRepository.getPlayList({ userId });
        if (!playList) {
            throw new CustomError("플레이리스트가 조회되지 않음.", 404);
        }
        if (!playList.musicIds.includes(musicId)) {
            throw new CustomError("플레이리스트에 해당 곡이 존재하지 않습니다.", 402);
        }

        const processedPlayList = await this.playListRepository.putPlayList({
            type: "delete",
            userId,
            musicId,
        });

        if (!processedPlayList) {
            throw new CustomError("playlist 변경에 실패했습니다.", 402);
        }

        const resultPlayList = {
            playListId: processedPlayList._id,
            userId: processedPlayList.userId,
            musicIds: processedPlayList.musicIds,
        };

        return resultPlayList;
    };
}

module.exports = PlayListService;
