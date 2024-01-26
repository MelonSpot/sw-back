const UserService = require("../services/user.service");
const CustomError = require("../utils/error.util");

class UserController {
    userService = new UserService();

    signUp = async (req, res) => {
        try {
            const { email, nickName, password } = req.body;

            if (!email || !nickName || !password) {
                throw new CustomError(
                    "email, nickName, password는 필수 입력값입니다.",
                    400,
                );
            }

            await this.userService.signUp(email, nickName, password);

            return res.status(200).end();
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode).json({
                message: error.message,
            });
        }
    };

    signIn = async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                throw new CustomError(
                    "email, password는 필수 입력값입니다.",
                    400,
                );
            }

            const { accessToken } = await this.userService.signIn(
                email,
                password,
            );

            res.cookie("accessToken", `Bearer ${accessToken}`, {
                secure: false,
            });

            return res.status(200).end();
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode).json({
                message: error.message,
            });
        }
    };

    userInfo = async (req, res) => {
        try {
            const { email, nickName } = res.locals.user;

            if (!email || !nickName) {
                throw new CustomError("로그인 후 이용 가능한 기능입니다.", 401);
            }

            console.log(email, nickName);

            const userInfo = await this.userService.userInfo(email, nickName);

            return res.status(200).json(userInfo);
        } catch (error) {
            console.log(error);
            return res.status(error.statusCode).json({
                message: error.message,
            });
        }
    };
}

module.exports = UserController;
