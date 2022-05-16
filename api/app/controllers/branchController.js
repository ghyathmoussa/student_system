const mysqlConnection = require("../config/db_config")

exports.showBranchs = (req,res) => {
    console.log(req.body)
    mysqlConnection.query('SELECT * FROM sube',(err,result) => {
        console.log(result)
        // console.log(fields)
        if(err){
            console.log(err)
            res.status(500).json({message:'error in showStudent function'})
        }else{
            console.log(result)
            if(result){
                res.status(200).json(result)
            }
        }
    })
}

exports.findOne = (req,res) => {
    console.log(req.body)
    mysqlConnection.query(`SELECT * FROM sube WHERE sube_id=${req.body.branch_id}`,(err,result) => {
        if(err){
            console.log(err)
            res.status(500).json({message:`Error in finding ${req.body.branch_id}`})
        }else{
            console.log(result)
            res.status(200).json({
                message:`${req.body.branch_id} found!`,
                result:result
            })
        }
    })
}