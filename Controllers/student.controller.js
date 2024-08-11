const expressAsyncHandler = require("express-async-handler");
const studentModel = require("../Models/student.model");
const { ObjectId } = require("mongodb");
const AddStudent = expressAsyncHandler(async (req, res) => {
    const { name, email, phone } = req.body;
    if (!name && !email && !phone) {
        res.status(404);
        throw new Error("name email phone is mandotory");
    }
    const student = await studentModel.create(req.body);
    res.status(200).json({ student });

})

const getAllStudent = expressAsyncHandler(async (req, res) => {
    const allStudent = await studentModel.find();
    res.status(200).json({ allStudent });
})


const getStudentById = expressAsyncHandler(async (req, res) => {
    const student = await studentModel.findById(req.params.id)
    if (!student) {
        res.status(404); // Set the response status to 404 (Not Found)
        throw new Error("student not found");
    }
    res.status(200).json({ student })
})


const updatdStudent = expressAsyncHandler(async (req, res) => {
    const student = await studentModel.findById(req.params.id)
    if (!student) {
        res.status(404);
        throw new Error();
    }
    const updatedStudent = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ updatedStudent })
})

const deleteStudent = expressAsyncHandler(async (req, res) => {
    const student = await studentModel.findById(req.params.id)
    if (!student) {
        res.status(404); // Set the response status to 404 (Not Found)
        throw new Error("student not found");
    }
    const data = await studentModel.deleteOne(new ObjectId(req.params.id));
    res.status(200).json(data);

})


module.exports = {
    AddStudent, getAllStudent, getStudentById, updatdStudent, deleteStudent
}