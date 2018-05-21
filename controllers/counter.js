function count(a, func, obj){
  if(!obj){
    var result = { ladder:{}};
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
  result["log"] = func.toString().match(/function ([^(]*)\(/)[1];

  return result;
}

module.exports.counter = function(){
  
}
