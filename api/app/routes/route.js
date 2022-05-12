const express = require('express');
const mysqlConnection = require("../config/db_config");
const router = express.Router();
const loginC = require('../controllers/loginController')

router.get('/',(req,res) => {
    res.status(200).json({message:"Hello"})
})

router.post('/login', loginC.login)




module.exports = router;