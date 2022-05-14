const express = require('express');
// const mysqlConnection = require("../config/db_config");
const router = express.Router();
const loginC = require('../controllers/loginController')
const studentC = require('../controllers/studentController')

// api links
router.post('/auth/login', loginC.login)
router.post('/register-student',studentC.createStudents)
router.get('/show-students',studentC.showStudents)




module.exports = router;