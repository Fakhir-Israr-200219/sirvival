const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "userName is required"],
        unique: [true, "user name already taken"]
    },
    email: {
        type: String,
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);