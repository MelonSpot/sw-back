require("dotenv").config();
const jwt = require("jsonwebtoken");

const secretKey = process.env.JWT_SECRET;

class CreateToken {
    constructor(email, nickName) {
        this.email = email;
        this.nickName = nickName;
    }

    createAccessToken() {
        const accessToken = jwt.sign(
            {
                email: this.email,
                nickName: this.nickName,
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
