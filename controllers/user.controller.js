const UserService = require("../services/user.service");
const CustomError = require("../utils/error.util");

class UserController {
    userService = new UserService();

    signUp = async (req, res) => {
        try {
            const { email, nickName, password } = req.body;

            if (!email || !nickName || !password) {
                throw new CustomError(
                    "email, nickName, password 필수 입력값입니다.",
                    400,
                );
            }

            await this.userService.signUp(email, nickName, password);

            return res.status(200).end();
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: error.message,
            });
        }
    };

    signIn = async (req, res) => {
        let result = await this.userService.signIn();
        return res.send({ result });
    };

    userInfo = async (req, res) => {
        let result = await this.userService.userInfo();
        return res.send({ result });
    };
}

module.exports = UserController;
