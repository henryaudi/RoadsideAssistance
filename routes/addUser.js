const express = require('express');
const router = express.Router();
const db = require('../sql.js');

router.post('/', function(req, res, next) {
    // Obtain new user information.
    const val = req.body;
    const userName = val.userName;
    const userPwd = val.userPwd;
    const userType = val.userType;

    // Check if the username was duplicated in the specified table.
    let query = "select * from " + userType + " where userName = ?";
    db.query(query, [userName], function (err, data) {
        if (err) {
            throw err;
        } else if (data.length > 0) {
            req.flash('error', '[WARNING] username was already in use');
            res.redirect('/');
        } else {
            // Add the new user into the corresponding table.
            let insertQuery = "insert into " + userType + " value(?,?,?,?)";
            db.query(insertQuery, [0, userName, userPwd, userType], function(err, data) {
                if (err) {
                    throw err;
                } else {
                    req.flash('success', '[SUCCESS] User created!');
                    res.redirect('/');
                }
            })
        }
    })
});

module.exports = router;