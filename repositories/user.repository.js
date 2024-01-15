const User = require("../schemas/user");

class UserRepository {
    getUser = async () => {
        return "유저 정보 조회";
    };

    postUser = async () => {
        return "유저 정보 등록";
    };

    putUser = async () => {
        return "유저 정보 수정";
    };

    deleteUser = async () => {
        return "유저 정보 삭제";
    };
}

module.exports = UserRepository;
