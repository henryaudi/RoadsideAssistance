const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'xxxxx',
    database:'finalproject'
});

db.connect();

module.exports = db;