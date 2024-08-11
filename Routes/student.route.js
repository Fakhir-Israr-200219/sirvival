const express = require("express")
const {getAllStudent,getStudentById,AddStudent} = require("../Controllers/student.controller");
const router = express.Router();

router.get("/",getAllStudent);
router.get("/:id",getStudentById);
router.post("/",AddStudent);

module.exports = router
