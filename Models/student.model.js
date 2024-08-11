const mongoose = require("mongoose");

const studentModel = mongoose.Schema({
    name:{
        type:String,
        required:[true,"student is required"]
    },
    email:{
        type:String,
        required:[true,"email required"]
    },
    phone:{
        type:String,
        required:[true,"phone is required"]
    }
})

module.exports = mongoose.model("student",studentModel)


