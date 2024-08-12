const asyncHandler = require("express-async-handler");

const register =  asyncHandler(async(req,res)=>{
    res.status(200).json("register hit the route successflly")
})


const login =  asyncHandler(async(req,res)=>{
    res.status(200).json("login hit the route successflly")
})



const currentUser =  asyncHandler(async(req,res)=>{
    res.status(200).json("currentUser hit the route successflly")
})

module.exports = {
    register,
    login,
    currentUser,
}