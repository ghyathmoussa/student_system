const mysqlConnection = require("../config/db_config")

exports.createStudents = (req,res) => {
    console.log(req.body)
    const {name,surname,tc,phone,adress} = req.body

    mysqlConnection.query('INSERT (name,surname,tc,adress) to ogrenci VALUES (?,?,?,?,?)',[name,surname,tc,phone,adress],(err,result) => {
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

exports.showStudents = (req,res) => {
    console.log(req.body)
    mysqlConnection.query('SELECT * FROM ogrenci',(err,result) => {
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
    mysqlConnection.query(`SELECT * FROM ogrenci WHERE tc=${req.body.tc}`,(err,result) => {
        if(err){
            console.log(err)
            res.status(500).json({message:`error in finding student with TC:${req.body.tc}`})
        }else{
            console.log(result)
            res.status(200).json(result)
        }
    })
}

exports.getInstallment = (req,res) => {
    console.log(req.body)
    mysqlConnection.query(`SELECT odeme FROM ogrenci WHERE tc=${req.body.tc}`,(err,result) => {
        if(err){
            console.log(err)
            res.status(500).json({message:'Error in getInstallment function'})
        }else{
            console.log(result)
            /*
             * there is another stuf that have to be added
             * modify DB after getting installment from student
             * or create new table for payments :) 
            */
            res.status(200).json(result)
        }
    })
}

exports.addToCourse = (req,res) => {
    console.log(req.body)
    /**
     * No payment information
     * create new table for payment
     * or move on as 0 and 1
     */
}