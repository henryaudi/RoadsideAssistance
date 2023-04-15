const express = require('express');
const router = express.Router();
const db = require('../sql.js');

router.post('/', function(req, res, next) {
    // Obtain new user information.
    const val = req.body;
    const location = val.location;
    const comment = val.comment;
    const driverName = req.session.driver_userName;

    let query = "insert into request value(?,?,?,?,?,?)";
    if (location.length == 0) {
        req.flash('error', '[ERROR] Form incomplete!')
        return res.redirect('/addRequest');
    }
    db.query(query, [0, driverName, 'N/A', location, comment, 'active'], function(err, data) {
        if (err) {
            throw err;
        } else {
            req.flash('success', '[SUCCESS] Request submitted!');
            res.redirect('/driver_right');
        }
    });
});

module.exports = router;