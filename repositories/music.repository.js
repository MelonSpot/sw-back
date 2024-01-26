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
}

module.exports = MusicRepository;
