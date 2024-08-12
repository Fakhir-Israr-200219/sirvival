const express = require("express");
const { register, login, currentUser } = require("../Controllers/user.controller");
const router = express.Router();


router.post("/register",register)
router.post("/login",login)
router.get("/currentUser",currentUser)


module.exports = router