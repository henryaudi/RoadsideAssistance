const express = require('express');
const router = express.Router();
const db = require('../sql.js');

router.get('/', function(req, res, next) {
    res.render('addRequest');
});

module.exports = router;