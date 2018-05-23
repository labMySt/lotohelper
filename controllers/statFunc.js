function multiple5Yes (element){
  for (var member = 1; member < 6; member++){
    if (element[member] % 5 == 0){
      return true;
   }
  }
  return false;
}

function multiple5No (element){
  for (var member = 1; member < 6; member++){
    if (element[member] % 5 == 0){
      return false;
   }
  }
  return true;
}
//------------------------------------------------------------------------------
function more4_5(element){
  var min = 36;
  for (var member = 1; member < 6; member++){
    if (element[member] < min) min = element[member];
   }
  if(min > 4) return true;
  return false;
}

function less4_5(element){
  var min = 36;
  for (var member = 1; member < 6; member++){
    if (element[member] < min) min = element[member];
   }
  if(min < 5) return true;
  return false;
}
//------------------------------------------------------------------------------
function more32(element){
  var min = 36;
  for (var member = 1; member < 6; member++){
    if (element[member] < min) min = element[member];
   }
  if(min > 32) return true;
  return false;
}

function less32(element){
  var min = 36;
  for (var member = 1; member < 6; member++){
    if (element[member] < min) min = element[member];
   }
  if(min < 33) return true;
  return false;
}
//------------------------------------------------------------------------------
function neighborYes(element){
  for (var member = 1; member < 6; member++){
    if ((element[member] - element[member + 1]) == 1) return true;
    if ((element[member] - element[member + 1]) == -1) return true;
  }
  return false;
}

function neighborNo(element){
  for (var member = 1; member < 5; member++){
    if ((element[member] - element[member + 1]) == 1) return false;
    if ((element[member] - element[member + 1]) == -1) return false;
  }
  return true;
}
//------------------------------------------------------------------------------
function multiple7Yes (element){
  for (var member = 1; member < 6; member++){
    if (element[member] % 7 == 0){
      return true;
   }
  }
  return false;
}
function multiple7No (element){
  for (var member = 1; member < 6; member++){
    if (element[member] % 7 == 0){
      return false;
   }
  }
  return true;
}
//------------------------------------------------------------------------------
function multiple10Yes (element){
  for (var member = 1; member < 6; member++){
    if (element[member] % 10 == 0){
      return true;
   }
  }
  return false;
}
function multiple10No (element){
  for (var member = 1; member < 6; member++){
    if (element[member] % 10 == 0){
      return false;
   }
  }
  return true;
}
//------------------------------------------------------------------------------
function evenMoreYes (element){
  var even = 0;
  var evenNot = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] % 2 == 0) even++;
    else evenNot++;
  }
  if(even > evenNot) return true;
  return false;
}
function evenMoreNo (element){
  var even = 0;
  var evenNot = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] % 2 == 0) even++;
    else evenNot++;
  }
  if(even > evenNot) return false;
  return true;
}
//------------------------------------------------------------------------------
function sumEvenMoreYes (element){
  var even = 0;
  var evenNot = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] % 2 == 0) even+=element[member];
    else evenNot+=element[member];
  }
  if(even > evenNot) return true;
  return false;
}
function sumEvenMoreNo (element){
  var even = 0;
  var evenNot = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] % 2 == 0) even+=element[member];
    else evenNot+=element[member];
  }
  if(even > evenNot) return false;
  return true;
}
//------------------------------------------------------------------------------
function count123 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] < 13) count++;
  }

  if(count > 2) return true;
  return false;
}
function count122 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] < 13) count++;
  }
  if(count == 2) return true;
  return false;
}
function count121 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] < 13) count++;
  }
  if(count < 2) return true;
  return false;
}
//------------------------------------------------------------------------------
function count183 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] < 19) count++;
  }

  if(count > 2) return true;
  return false;
}
function count182 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] < 19) count++;
  }
  if(count == 2) return true;
  return false;
}
function count181 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] < 19) count++;
  }
  if(count < 2) return true;
  return false;
}
//------------------------------------------------------------------------------
function count243 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] < 25 && element[member] > 12) count++;
  }
  if(count > 2) return true;
  return false;
}
function count242 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] < 25 && element[member] > 12) count++;
  }
  if(count == 2) return true;
  return false;
}
function count241 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] < 25 && element[member] > 12) count++;
  }
  if(count < 2) return true;
  return false;
}
//------------------------------------------------------------------------------
function count363 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] > 18) count++;
  }
  if(count > 2) return true;
  return false;
}
function count362 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] > 18) count++;
  }
  if(count == 2) return true;
  return false;
}
function count361 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] > 18) count++;
  }
  if(count < 2) return true;
  return false;
}
//------------------------------------------------------------------------------
function count25363 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] > 24) count++;
  }
  if(count > 2) return true;
  return false;
}
function count25362 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] > 24) count++;
  }
  if(count == 2) return true;
  return false;
}
function count25361 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] > 24) count++;
  }
  if(count < 2) return true;
  return false;
}
//------------------------------------------------------------------------------
function countEven3 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] %2 == 0) count++;
  }
  if(count > 2) return true;
  return false;
}
function countEven2 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] %2 == 0) count++;
  }
  if(count == 2) return true;
  return false;
}
function countEven1 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] %2 == 0) count++;
  }
  if(count < 2) return true;
  return false;
}
//------------------------------------------------------------------------------
function countNotEven3 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (!(element[member] %2) == 0) count++;
  }
  if(count > 2) return true;
  return false;
}
function countNotEven2 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (!(element[member] %2) == 0) count++;
  }
  if(count == 2) return true;
  return false;
}

function countNotEven1 (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (!(element[member] %2) == 0) count++;
  }
  if(count < 2) return true;
  return false;
}
//------------------------------------------------------------------------------
function sum12more (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] <13 ) count+=element[member];
  }
  if(count > 10) return true;
  return false;
}
function sum12less (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] <13 ) count+=element[member];
  }
  if(count < 11) return true;
  return false;
}
//------------------------------------------------------------------------------
function sum18more (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] <19 ) count+=element[member];
  }
  if(count > 23) return true;
  return false;
}
function sum18less (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] <19 ) count+=element[member];
  }
  if(count < 24) return true;
  return false;
}
//------------------------------------------------------------------------------
function sum18more (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] <19 ) count+=element[member];
  }
  if(count > 23) return true;
  return false;
}
function sum18less (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] <19 ) count+=element[member];
  }
  if(count < 24) return true;
  return false;
}
//------------------------------------------------------------------------------
function sum24more (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
  if (element[member] < 25 && element[member] > 12) count+=element[member];
  }
  if(count > 31) return true;
  return false;
}
function sum24less (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] < 25 && element[member] > 12) count+=element[member];
  }
  if(count < 32) return true;
  return false;
}
//------------------------------------------------------------------------------
function sum1936more (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
  if (element[member] > 18) count += element[member];
  }
  if(count > 67) return true;
  return false;
}
function sum1936less (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] > 18) count += element[member];
  }
  if(count < 68) return true;
  return false;
}
//------------------------------------------------------------------------------
function sum36more (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
  if (element[member] > 25) count += element[member];
  }
  if(count > 55) return true;
  return false;
}
function sum36less (element){
  var count = 0;
  for (var member = 1; member < 6; member++){
    if (element[member] > 25) count += element[member];
  }
  if(count < 56) return true;
  return false;
}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
var massFunc = [
   more4_5,
   less4_5,
   more32,
   less32,
   neighborYes,
   neighborNo,
   multiple5Yes,
   multiple5No,
   multiple7Yes,
   multiple7No,
   multiple10Yes,
   multiple10No,
   evenMoreYes,
   evenMoreNo,
   sumEvenMoreYes,
   sumEvenMoreNo,
   count123,
   count122,
   count121,
   count183,
   count182,
   count181,
   count243,
   count242,
   count241,
   count363,
   count362,
   count361,
   count25363,
   count25362,
   count25361,
   countEven3,
   countEven2,
   countEven1,
   countNotEven3,
   countNotEven2,
   countNotEven1,
   sum12more,
   sum12less,
   sum18more,
   sum18less,
   sum24more,
   sum24less,
   sum36more,
   sum36less
   // ,
   // sum1936more,
   // sum1936less,
   // difMoreYes,
   // difMoreNo,
   // sumMore,
   // sumLess,
   // sumEvenMore,
   // sumEvenless,
   // sumNotEvenMore,
   // sumNotEvenless,
   // sumAllMore,
   // sumAllLess,
   // more1,
   // less1,
   // more2,
   // less2,
   // more3,
   // less3,
   // more4,
   // less4,
   // more5,
   // less5,
   // even1,
   // notEven1,
   // even2,
   // notEven2,
   // even3,
   // notEven3,
   // even4,
   // notEven4,
   // even5,
   // notEven5,
   // lessEven,
   // lessNotEven,
   // mostEven,
   // mostNotEven,
   // sumLessMostEven,
   // sumLessMostNotEven,
   // difLessMostEven,
   // difLessMostNotEven,
   // sumAllTo60,
   // sumAllTo70,
   // sumAllTo80,
   // sumAllTo92,
   // sumAllTo104,
   // sumAllTo114,
   // sumAllTo124,
   // sumAllTo170
 ];
 console.log("massFUnc", massFunc);
 module.exports = massFunc;
