var massFunc = require('./statFunc');
const lotto = require('../models/lottories');
var stat = require('../models/stats');

function count(a, func, obj){
  if(a.length == 0) return obj;
  if(obj == null){
    var result = {
      ladder:{},
      log: func.toString().match(/function ([^(]*)\(/)[1]
    };
    var counter = 0;
  } else {
    var result = obj;
    var counter = result["counter"];
  }

  const length = a.length;
  for(var i = 0; i <length; i++){
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
  result["Drowing"] = a[i-1].number;
  return result;
}

function connector(func){
  var log = func.toString().match(/function ([^(]*)\(/)[1];
  stat.findOne({ 'log': log }, function(err, obj){
    if(err) console.log(err);
    if(obj==null) var drow = 0;
    else var drow = obj.Drowing+1;
    lotto.find({ number: { $gte: drow }}, function(err, lottories){
         if(err) console.log(err);
         if(lottories){
           var result = count(lottories, func, obj);
           stat.findOneAndUpdate({'log': log},result, {upsert: true},function(err, obj){
             if(err) console.log(err);
           })
         }
         console.log("doesn't have object")
     })
   })
 };

function statCalculattion(massFunc){
  var length = massFunc.length;
  for (var i = 0; i < length; i++){
    connector(massFunc[i]);
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

module.exports.calculation = function(req, res){
      statCalculattion(massFunc);
       res.send("lottories");
};
