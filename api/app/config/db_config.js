const mysql = require('mysql');

//Conecting to the database
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pasword',
    database: 'birlisanbirinsan',
    multipleStatements: true
  });
  console.log('test succeded.')
  mysqlConnection.connect((err) => {
    if (!err)
        console.log('DB connection succeded.');
    else
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
  });
  module.exports = mysqlConnection;