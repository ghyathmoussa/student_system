const mysqlConnection = require("../config/db_config")

exports.createStudents = (res,req) => {
    console.log(req.body)
    const {ID,name,surname,tc,lesson} = req.body

    mysqlConnection.query('INSERT (ID,name,surname,tc,lesson) to ogrenci VALUES (?,?,?,?,?)',[ID,name,surname,tc,lesson],(err,result) => {
        if(err){
            console.log(err)
            res.status(500).json({message:'error in insertion'})
        }else{
            if(result){
                res.status(200).json({message:'insert opertation successful!'})
            }else{
                res.json({message:'error in result'})
            }
        }
    })
}