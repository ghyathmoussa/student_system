const mysqlConnection = require('../config/db_config')
exports.login = async (req,res) =>{
    console.log(req.body);
    const { username, password} = req.body;
    mysqlConnection.query('SELECT * FROM kayit_elemani Where eleman_username = ? AND eleman_password = ? ',[username,password], (err, result) => {
        console.log(result)
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
}

