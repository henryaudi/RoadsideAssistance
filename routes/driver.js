var express = require('express');
var router = express.Router();
const db = require('../sql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('driver');
});

module.exports = router;
