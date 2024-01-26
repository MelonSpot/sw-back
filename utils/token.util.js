require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;

class CreateToken {
    constructor(user) {
        this.email = user.email;
        this.nickName = user.nickName;
        this.userId = user._id;
    }

    createAccessToken() {
        const accessToken = jwt.sign(
            {
                email: this.email,
                nickName: this.nickName,
                userId: this.userId,
            },
            secretKey,
            {
                expiresIn: "1d",
            },
        );
        return accessToken;
    }
}

class VerifyToken {
    constructor(accessToken) {
        this.accessToken = accessToken;
    }

    validateAccessToken() {
        try {
            jwt.verify(this.accessToken, secretKey);
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = {
    CreateToken,
    VerifyToken,
};
