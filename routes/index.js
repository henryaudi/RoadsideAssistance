var express = require('express');
var router = express.Router();
const db = require('../sql.js');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/', function(req, res) {
    // Obtain user inputs.
    const val = req.body;
    const userName = val.userName;
    const userPwd = val.userPwd;
    const userType = val.userType;

    if (userType.length == 0 ||
        userName.length == 0 ||
        userPwd.length == 0) {
        req.flash('error', '[ERROR] Incomplete fields!')
        return res.redirect('/');
    }

    // Search in the db
    let query = "select * from " + userType + " where userName = ? and userPwd = ?";
    db.query(query, [userName, userPwd], function (err, data) {
        if (err) {
            throw err;
        }
        else if (data.length > 0) {
            // Session storage
            // req.session.userName = userName;
            if (userType == "driver") {
                req.session.driver_userName = userName;
                console.log(req.session.driver_userName);
            } else if (userType == "technician") {
                req.session.tech_userName = userName;
            }

            // Redirect to the correct user page in view.
            switch (userType) {
                case "admin":
                    res.redirect('/admin');
                    break;
                case "driver":
                    res.redirect('/driver');
                    break;
                case "technician":
                    res.redirect('/tech');
                    break;
            }
        }
        else {
            req.flash('error', '[WARNING] Login failed!');
            res.redirect('/');
        }
    });
});



module.exports = router;