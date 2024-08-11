const expressAsyncHandler = require("express-async-handler");
const studentModel = require("../Models/student.model");

const AddStudent = expressAsyncHandler(async (req,res)=>{
    const {name , email , phone } = req.body;
    if(!name && !email && !phone){
        res.status(404);
        throw new Error("name email phone is mandotory");
    }
    const student = await studentModel.create(req.body);
    res.status(200).json({student});

})

const getAllStudent = expressAsyncHandler(async(req,res)=>{
    const allStudent = await studentModel.find();
    res.status(200).json({allStudent});
})


const getStudentById = expressAsyncHandler(async(req,res)=>{
    const student = await studentModel.findById(req.params.id)
    if(!student){
        res.status(404); // Set the response status to 404 (Not Found)
        throw new Error("student not found");
    }
    res.status(200).json({student})
})

module.exports = {
    AddStudent,getAllStudent,getStudentById
}