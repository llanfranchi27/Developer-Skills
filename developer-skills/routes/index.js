var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Home page time is ", req.time)
  res.render('index', { title: 'Express Skills' });
});

module.exports = router;
