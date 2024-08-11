const express = require("express")
const {getAllStudent,getStudentById,AddStudent,updatdStudent,deleteStudent} = require("../Controllers/student.controller");
const router = express.Router();

router.get("/",getAllStudent);
router.get("/:id",getStudentById);
router.post("/",AddStudent);
router.delete("/:id",deleteStudent);
router.put("/:id",updatdStudent);

module.exports = router
