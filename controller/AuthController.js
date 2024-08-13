const { make } = require("../utils/hash.password");
const bcrypt = require("bcrypt");
const model = require("../models/index");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = model.User;
const {
    SuccessResponse,
    ErrorResponse,
    NotFoundResponse,
    BadRequestResponse,
} = require("../cors/apiRes.js");
class AuthController {
    async Login(req, res) {
        try {
            const { email, password } = req.body;
            if (!email && !password) {
                return new BadRequestResponse().send(req, res);
            }
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ error: "Invalid password" });
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ error: "Invalid password" });
            }
            const secretKey = crypto.randomBytes(32).toString("hex");
            const token = jwt.sign({ userId: user.id }, secretKey, {
                expiresIn: "1h",
            });
            return new SuccessResponse().send(req, res, {
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                },
            });
        } catch (error) {
            console.error(error);
            return new ErrorResponse().send(req, res);
        }
    }
    async Register(req, res) {
        try {
            const { username, email, password } = req.body;
            if (!username && !email && !password) {
                return new BadRequestResponse().send(req, res);
            }
            const newUser = await User.create({
                username: username,
                email: email,
                password: make(password),
            });
            return new SuccessResponse().send(req, res, newUser);
        } catch (error) {
            console.error(error);
            return new ErrorResponse().send(req, res);
        }
    }
}
module.exports = new AuthController();
