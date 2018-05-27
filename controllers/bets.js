const bets = require('../models/bets');
const stats = require('../models/stats');
const {typeOfBets} = require("./TypeOfBets");

module.exports.bets = function(req, res){
  bets.find({},function(err, bets){
    if(bets) res.json(bets);
  })
};

module.exports.betsPush = function(req, res){
    bets.collection.insert(typeOfBets, function(err, list) {
      if (err) {
          res.send(err);
      }
      res.send(list);
  })

}

module.exports.getStat = function(req, res){
  console.log(req.params.log);
    stats.findOne({'log': req.params.log}, function(err, stat) {
      if (err) {
          res.send(err);
      }
      res.json(stat);
  })

}
