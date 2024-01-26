const UserRepository = require("../repositories/user.repository");
const PlayListRepository = require("../repositories/playList.repository");
const CustomError = require("../utils/error.util");
const { CreateToken } = require("../utils/token.util");

class UserService {
    userRepository = new UserRepository();
    playListRepository = new PlayListRepository();

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

        await this.playListRepository.postPlayList({ userId: user._id });

        return true;
    };

    signIn = async (email, password) => {
        const user = await this.userRepository.getUser({ email });

        if (!user || password !== user.password) {
            throw new CustomError("비밀번호 또는 아이디가 일치하지 않습니다.", 401);
        }

        const createToken = new CreateToken(user);
        const accessToken = createToken.createAccessToken();

        return { accessToken };
    };

    userInfo = async (email, nickName) => {
        const user = await this.userRepository.getUser({ email, nickName });

        if (!user) {
            throw new CustomError("유저 정보가 없습니다.", 404);
        }

        const playList = await this.playListRepository.getPlayList({
            userId: user._id,
        });

        const userInfo = {
            userId: user._id,
            email: user.email,
            nickName: user.nickName,
            playList: playList.musicIds,
        };

        return userInfo;
    };
}

module.exports = UserService;
