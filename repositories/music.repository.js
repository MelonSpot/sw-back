const Music = require("../schemas/music");

class MusicRepository {
    getMusic = async () => {
        return "음악 조회";
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
