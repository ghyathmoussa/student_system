const express = require('express');
// const mysqlConnection = require("../config/db_config");
const router = express.Router();
const loginC = require('../controllers/loginController')
const studentC = require('../controllers/studentController')
const branchC = require('../controllers/branchController')

// api links
router.post('/auth/login', loginC.login)
router.post('/register-student',studentC.createStudents)
router.get('/show-students',studentC.showStudents)
router.get('/show-branchs',branchC.showBranchs)

module.exports = router;