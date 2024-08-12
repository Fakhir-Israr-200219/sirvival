const express = require("express");
const StudentRouter = require("./Routes/student.route");
const UserRouter = require("./Routes/user.route");
const db = require("./Config/dbConnect");
const errorHandler = require("./Middlewares/errorHandler");
const dotenv = require("dotenv").config()


const app = express()
db();
app.use(express.json());


app.use("/student",StudentRouter)
app.use("/user",UserRouter);



app.use(errorHandler);
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`App runing on port ${port}`)
})