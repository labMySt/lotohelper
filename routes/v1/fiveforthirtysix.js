var express = require('express');
var router = express.Router();

var cntrReload = require("../../controllers/reload");
var cntrGetLotto = require("../../controllers/getLotto");
var cntrCalculation = require("../../controllers/calculation");
/* GET home page. */
router.get('/5from36/', function(req, res, next) {
  res.send("5from36");
});

router.get('/reload/',cntrReload.reload);
router.get('/getlotto/',cntrGetLotto.getLotto);
router.get('/count/',cntrCalculation.calculation);

module.exports = router;
