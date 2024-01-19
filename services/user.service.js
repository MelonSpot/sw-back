const UserRepository = require("../repositories/user.repository");
const CustomError = require("../utils/error.util");

class UserService {
    userRepository = new UserRepository();

    signUp = async (email, nickName, password, res) => {
        const checkUser = await this.userRepository.getUser({ email });

        console.log("checkUser:", checkUser);
        if (checkUser) {
            throw new CustomError("이미 존재하는 이메일입니다.", 400);
        }

        const user = await this.userRepository.postUser({
            email,
            nickName,
            password,
        });

        console.log("service user:", user);

        return user;
    };

    signIn = async () => {
        return await this.userRepository.postUser();
    };

    userInfo = async () => {
        return await this.userRepository.getUser();
    };
}

module.exports = UserService;
