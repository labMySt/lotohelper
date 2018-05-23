var massFunc = require('./statFunc');
const lotto = require('../models/lottories');
var stat = require('../models/stats');

function count(a, func, obj){
  if(!obj){
    var result = {
      ladder:{},
      log: func.toString().match(/function ([^(]*)\(/)[1]
    };
    var counter = 0;
    var sart = 0;

  } else {
    var result = obj;
    var counter = result["counter"];
    var sart = result["Drowing"];
  }
  const length = a.length;

  for(var i = sart; i <length; i++){
    if(func(a[i])){
      if(typeof result.ladder[counter] == 'object') {
          result.ladder[counter].count++;
          result.ladder[counter].drowing.push(a[i].number);
          counter = 0;
      } else {
         result.ladder[counter] = {count: 1, drowing:[]};
         result.ladder[counter].drowing.push(a[i].number);
         counter = 0;
      }
    } else {
      counter++;
   }
  }
  result["counter"] = counter;
  result["Drowing"] = length;
  return result;
}


function connector(lottories, func){
  var log = func.toString().match(/function ([^(]*)\(/)[1];
  stat.findOne({ 'log': log }, function(err, obj){
    if(err) console.log(err);
    var result = count(lottories, func, obj);
    stat.findOneAndUpdate({'log': log},result, {upsert: true},function(err, obj){
      if(err) return done(err);
    })
  })
};

function statCalculattion(lottories, massFunc){
  var length = massFunc.length;
  for (var i = 0; i < length; i++){
    connector(lottories, massFunc[i]);
  }
};
// module.exports.calculation = function(name){
//   if(!name) var name = "5from36";
//   lotto.findOne({ 'name': name }, function(err, lottories){
//     if(err) console.log(err);
//     if(lottories)
//     statCalculattion(lottories.drowing, massFunc);
//   })
// };

function multiple5Yes (element){
  for (var member = 1; member < 6; member++){
    if (element[member] % 5 == 0)
      return true;
  }
  return false;
};

var first = [
  {1: 1, 2:2, 3:3, 4:4, 5:4, number: 1},
  {1: 1, 2:2, 3:3, 4:4, 5:5, number:2},
  {1: 1, 2:1, 3:19, 4:19, 5:19, number: 3}
]
module.exports.calculation = function(req, res){
  lotto.find({ number: { $gte: 2 }}, function(err, lottories){
       if(err) console.log(err);
       if(lottories)
       res.send(lottories);

     })
     
};
