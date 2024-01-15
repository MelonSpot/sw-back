const UserRepository = require("../repositories/user.repository");

class UserService {
    userRepository = new UserRepository();

    signUp = async () => {
        return await this.userRepository.postUser();
    };

    signIn = async () => {
        return await this.userRepository.postUser();
    };

    userInfo = async () => {
        return await this.userRepository.getUser();
    };
}

module.exports = UserService;
