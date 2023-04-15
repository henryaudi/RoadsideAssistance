const express = require('express');
const router = express.Router();
const db = require('../sql.js');

router.get('/', function(req, res, next) {
    const userName = req.session.tech_userName;
    const userId = req.session.tech_userId;

    // Select active requests from the request table.
    let query = "select * from request where status = ?";
    db.query(query, ['active'], function (err, data) {
        if (err) {
            throw err;
        } else {
            res.render('tech_active_request', {userName: userName, userId: userId, record: data});
        }
    });
});

module.exports = router;