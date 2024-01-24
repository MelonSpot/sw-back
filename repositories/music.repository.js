const Music = require("../schemas/music");

class MusicRepository {
    getMusic = async (condition) => {
        if (condition === "all") {
            const music = await Music.find();
            return music;
        } else if (condition !== "all") {
            const music = await Music.findOne({ _id: condition });
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
