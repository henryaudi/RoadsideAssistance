const express = require('express');
const router = express.Router();
let mod = require('./index');
const db = require("../sql");

/* GET home page. */
router.get('/', function(req, res, next) {
    const userName = req.session.driver_userName;
    getUserByUserName(userName, 'driver',(err, userId) => {
        if (err) { throw err; }
        req.session.driver_userId = userId;
        res.render('driver_left', {userName: userName, userId: userId});
    });
});

module.exports = router;

/** Get the user ID by the username.
 * @param userName: the username as the keyword for search
 * @param table: the table in the database to search from
 * @param callback: the callback function passed in as a parameter
 */
function getUserByUserName(userName, table, callback) {
    const query = 'select id from ' + table + ' where userName = ?';
    db.query(query, [userName], (err, results) => {
        if (err) {
            throw err;
        } else if (results.length > 0) {
            callback(null, results[0].id);
        } else {
            callback(null, null);
        }
    });
}