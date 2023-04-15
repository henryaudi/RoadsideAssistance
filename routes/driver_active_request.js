const express = require('express');
const router = express.Router();
const db = require('../sql.js');

router.get('/', function(req, res, next) {
    const userName = req.session.driver_userName;
    const userId = req.session.driver_userId;
    let query = "select * from request where driver = ? and status = ?";
    db.query(query, [userName, 'active'], function (err, data) {
        if (err) {
            throw err;
        } else {
            res.render('driver_active_request', {userName: userName, userId: userId, record: data});
        }
    });
});

module.exports = router;