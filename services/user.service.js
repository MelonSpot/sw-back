const UserRepository = require("../repositories/user.repository");
const CustomError = require("../utils/error.util");
const { CreateToken } = require("../utils/token.util");

class UserService {
    userRepository = new UserRepository();

    signUp = async (email, nickName, password, res) => {
        const checkUser = await this.userRepository.getUser({ email });

        if (checkUser) {
            throw new CustomError("이미 존재하는 이메일입니다.", 400);
        }

        const user = await this.userRepository.postUser({
            email,
            nickName,
            password,
        });

        return user;
    };

    signIn = async (email, password) => {
        const user = await this.userRepository.getUser({ email });

        if (!user || password !== user.password) {
            throw new CustomError(
                "비밀번호 또는 아이디가 일치하지 않습니다.",
                401,
            );
        }

        const createToken = new CreateToken(user.email, user.nickName);
        const accessToken = createToken.createAccessToken();

        return { accessToken };
    };

    userInfo = async () => {
        return await this.userRepository.getUser();
    };
}

module.exports = UserService;
