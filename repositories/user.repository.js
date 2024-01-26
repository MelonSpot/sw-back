const User = require("../schemas/user");

class UserRepository {
    getUser = async (condition) => {
        const user = await User.findOne(condition);
        return user;
    };

    postUser = async (condition) => {
        const user = await User.create(condition);
        return user;
    };
}

module.exports = UserRepository;
