const lotto = require('../models/lottories');

module.exports.getLotto = function(req, res){
  lotto.find({}, null, {sort: {number: -1}, limit: 40}, function(err, lottories){
    if(lottories) res.json(lottories);
  })
};
