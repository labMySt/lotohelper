const bets = require('../models/bets');
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
