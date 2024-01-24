const Music = require("../schemas/music");

class MusicRepository {
    getMusic = async (condition) => {
        if (condition.type === "all") {
            const music = await Music.find();
            return music;
        } else if (condition.type === "_id") {
            const music = await Music.findOne({ _id: condition.musicId });
            return music;
        } else if (condition.type === "tag") {
            const music = await Music.find({ tags: condition.tagName });
            return music;
        }
    };

    postMusic = async () => {
        return "음악 수정";
    };

    putMusic = async () => {
        return "음악 변경";
    };

    deleteMusic = async () => {
        return "음악 삭제";
    };
}

module.exports = MusicRepository;
