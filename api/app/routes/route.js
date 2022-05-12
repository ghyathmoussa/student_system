const express = require('express');
const mysqlConnection = require("../config/db_config");
const router = express.Router();

router.get('/',(req,res) => {
    res.status(200).json({message:"Hello"})
})

router.post('/login', async (req,res) =>{
    console.log(req.body);
    const { username, password} = req.body;
    mysqlConnection.query('SELECT * FROM kayit_elemani Where eleman_username = ? AND eleman_password = ? ',[username,password], (err, result) => {
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