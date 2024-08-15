const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../Models/userModel")
const jwt = require("jsonwebtoken")

const register = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName && !email && !password) {
        res.status(404);
        throw new Error("all feailds are mandatory")
    }
    const avalibleUser = await User.findOne({ userName });
    if (avalibleUser) {
        res.status(400);
        throw new Error("User name already taken");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        userName,
        email,
        password: hashPassword,
    });
    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400)
        throw new Error("User data is not valid")
    }
})


const login = asyncHandler(async (req, res) => {
    const { userName, password } = req.body;
    if (!userName && !password) {
        res.status(400);
        throw new Error("user name aand password is required")
    }
    const user = await User.findOne({ userName });
    if (user && bcrypt.compare(password, user.password)) {
        const acessToken = jwt.sign({
            user: {
                userName: user.userName,
                email: user.email,
                password: user.password,
            },
        },
            process.env.VALIDATE_TOKEN_SECREAT,
            { expiresIn: "15m" }
        );
        res.status.json({ acessToken })
    } else {
        res.status(401);
        throw new Error("email or password is not valid");
    }

})



const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
})

module.exports = {
    register,
    login,
    currentUser,
}