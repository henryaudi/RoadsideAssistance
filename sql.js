const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql1579',
    database:'finalproject'
});

db.connect();

module.exports = db;