var express = require('express');
var router = express.Router();

var cntrReload = require("../../controllers/reload");

/* GET home page. */
router.get('/5from36/', function(req, res, next) {
  res.send("5from36");
});


router.get('/reload/',cntrReload.reload);
module.exports = router;
