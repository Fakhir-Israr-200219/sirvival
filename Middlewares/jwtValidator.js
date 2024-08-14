const jwt = require("jsonwebtoken")
const expressAsyncHandler = require("express-async-handler");


const jwtValidator = expressAsyncHandler(async (req, res) => {
    let token;
    const authHeader = req.header.Authorization || req.header.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token,process.env.VALIDATE_TOKEN_SECREAT,(err,decode)=>{
            if(err){
                res.json(400);
                throw new Error("User is not authorized")
            }
            req.user = decode.user;
            next();
        })
        if(!token){
            res.status(401);
            throw new Error("user is not authorized");
        }
    }
})

module.exports = jwtValidator