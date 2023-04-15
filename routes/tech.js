var express = require('express');
var router = express.Router();
const db = require('../sql.js');
let {userName, userType} = require('./index');

router.get('/', function(req, res, next) {
    res.render('tech', {userName: userName, userType: userType});
});

module.exports = router;
