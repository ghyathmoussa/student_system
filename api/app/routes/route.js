const express = require('express');
const mysqlConnection = require("../config/db_config");
const router = express.Router();
const loginC = require('../controllers/loginController')
const studentC = require('../controllers/studentController')

router.get('/',(req,res) => {
    res.status(200).json({message:"Hello"})
})

router.post('/auth/login', loginC.login)
router.post('/register-student',studentC.createStudents)
router.get('/show-students',studentC.showStudents)




module.exports = router;