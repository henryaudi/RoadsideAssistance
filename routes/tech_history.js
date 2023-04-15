const express = require('express');
const router = express.Router();
const db = require('../sql.js');

router.get('/', function(req, res, next) {
    const userName = req.session.tech_userName;
    const userId = req.session.tech_userId;
    let query = "select * from request where tech = ? and status = ?";
    db.query(query, [userName, 'completed'], function (err, data) {
        if (err) {
            throw err;
        } else {
            res.render('tech_history', {userName: userName, userId: userId, record: data});
        }
    });
});

module.exports = router;