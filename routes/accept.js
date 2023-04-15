var express = require('express');
var router = express.Router();
const db = require('../sql.js');

router.get('/', function(req, res, next) {
    const request_id = req.query.id;
    const tech = req.session.tech_userName;
    const query = "update request set status = 'completed', tech = ? where request_id = ?";
    db.query(query, [tech, request_id], function(err, result) {

        // Refresh the table.
        const userName = req.session.userName;
        const userId = req.session.userId;

        // Select active requests from the request table.
        let query = "select * from request where status = ?";
        db.query(query, ['active'], function (err, data) {
            if (err) {
                throw err;
            } else {
                res.render('tech_active_request', {userName: userName, userId: userId, record: data});
            }
        });
    })

});

module.exports = router;
