const User = require("../schemas/user");

class UserRepository {
    getUser = async (condition) => {
        const user = await User.findOne(condition);
        console.log("user:", user);
        return user;
    };

    postUser = async (condition) => {
        const user = await User.create(condition);
        return user;
    };

    putUser = async () => {
        return "유저 정보 수정";
    };

    deleteUser = async () => {
        return "유저 정보 삭제";
    };
}

module.exports = UserRepository;
