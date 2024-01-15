const UserService = require("../services/user.service");

class UserController {
    userService = new UserService();

    signUp = async (req, res) => {
        let result = await this.userService.signUp();
        return res.send({ result });
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
