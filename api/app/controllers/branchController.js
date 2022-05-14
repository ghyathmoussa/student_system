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