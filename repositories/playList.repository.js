const PlayList = require("../schemas/playList");

class PlayListRepository {
    getPlayList = async (condition) => {
        const playList = await PlayList.findOne(condition);
        return playList;
    };

    putPlayList = async (condition) => {
        let updatedPlayList;
        if (condition.type === "add") {
            updatedPlayList = await PlayList.findOneAndUpdate(
                { userId: condition.userId },
                { $push: { musicIds: condition.musicId } },
                { new: true, safe: true, upsert: true },
                // upsert: true 옵션은 문서가 없으면 새로 생성
            );
        } else if (condition.type === "delete") {
            updatedPlayList = await PlayList.findOneAndUpdate(
                { userId: userId },
                { $pull: { musicIds: musicId } },
                { new: true }, // 수정된 문서를 반환
            );
        }
        return updatedPlayList;
    };
}

module.exports = PlayListRepository;
