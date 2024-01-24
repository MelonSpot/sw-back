const jwt = require("jsonwebtoken");
const CustomError = require("../utils/error.utils");
const { VerifyToken } = require("../utils/token.utils");

require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
    try {
        if (req.headers.authorization === undefined) {
            throw new CustomError(
                "로그인 후 이용 가능한 기능입니다.(request 헤더에 토큰 정보가 없음)",
                401,
            );
        }

        const token = req.headers.authorization;
        const [AuthType, AuthToken] = (token ?? "").split(" ");
        if (!AuthToken || AuthType !== "Bearer") {
            throw new CustomError(
                "로그인 후 이용 가능한 기능입니다.(토큰 형식이 올바르지 않음)",
                401,
            );
        }

        const verifyToken = new VerifyToken(AuthToken);

        const isTokenValidate = verifyToken.validateAccessToken();
        if (!isTokenValidate) {
            throw new CustomError(
                "로그인 후 이용 가능한 기능입니다.(토큰 유효성 검사에 실패)",
                401,
            );
        }

        // 토큰 Decode -> 토큰의 payload에 닮긴 user 정보 추출
        const user = jwt.verify(AuthToken, secretKey);

        res.locals.user = user;
        next();
    } catch (err) {
        console.error(err);
        if (err instanceof CustomError) {
            return res.status(err.statusCode).json({
                message: err.message,
            });
        }
        return res.status(401).json({
            message: "기타 오류",
        });
    }
};
