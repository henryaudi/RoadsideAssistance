var express = require('express');
var router = express.Router();
const db = require('../sql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', function(req, res) {
  // Obtain user inputs.
  const val = req.body;
  const userName = val.userName;
  const userPwd = val.userPwd;
  const userType = val.userType;

  // Search in the db
  let query = "select * from " + userType + " where userName = ? and userPwd = ?";
  db.query(query, [userName, userPwd], function (err, data) {
    if (err) {
      console.log(query);
      throw err;
    }
    else if (data.length > 0) {
      console.log('Login success!');
    }
    else {
      console.log('Login failed');
    }
  });
})

module.exports = router;
