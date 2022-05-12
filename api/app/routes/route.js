const express = require('express');
const mysqlConnection = require("../config/db_config");
const router = express.Router();


router.post('/login', async (req,res) =>{
    console.log(req.body);
    const { username, password} = req.body;
    mysqlConnection.query('SELECT * FROM customers Where user_name = ? AND password = ? ',[username,password], (err, result) => {
        if (err){
            console.log(err)
            res.send({err: err})
        }
        else{
            if(result){
                res.send(result)
            }
            else{
                res.send({message: "No user found"})
            }
        }
            
    })
})




module.exports = router;