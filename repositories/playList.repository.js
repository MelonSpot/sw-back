const PlayList = require("../schemas/playList");

class PlayListRepository {
    getPlayList = async (condition) => {
        const playList = await PlayList.findOne(condition);
        return playList;
    };

    // postPlayList = async (music) => {
    //     return music;
    // };

    // putPlayList = async (music) => {
    //     return music;
    // };

    // deletePlayList = async (music) => {
    //     return music;
    // };
}

module.exports = PlayListRepository;
