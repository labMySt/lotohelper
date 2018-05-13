var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/5from36/', function(req, res, next) {
  res.send("5from36");
});

router.get('/5from36/:id', function(req, res) {
  res.send( req.params.id);
});

module.exports = router;
