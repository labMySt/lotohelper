function multiple5Yes (element){
  for (var member = 1; member < 7; member++){
    if (element[member] % 5 == 0){
      return true;
   }
  }
  return false;
}

function multiple5No (element){
  for (var member = 1; member < 7; member++){
    if (element[member] % 5 == 0){
      return false;
   }
  }
  return true;
}
//------------------------------------------------------------------------------
function more4(element){
  var min = 36;
  for (var member = 1; member < 7; member++){
    if (element[member] < min) min = element[member];
   }
  if(min > 4) return true;
  return false;
}

function less4(element){
  var min = 36;
  for (var member = 1; member < 7; member++){
    if (element[member] < min) min = element[member];
   }
  if(min < 5) return true;
  return false;
}
//------------------------------------------------------------------------------
function more32(element){
  var min = 36;
  for (var member = 1; member < 7; member++){
    if (element[member] < min) min = element[member];
   }
  if(min > 32) return true;
  return false;
}

function less32(element){
  var min = 36;
  for (var member = 1; member < 7; member++){
    if (element[member] < min) min = element[member];
   }
  if(min < 33) return true;
  return false;
}
//------------------------------------------------------------------------------
function neighborYes(element){
  for (var member = 1; member < 6; member++){
    console.log(element[member]);
    if ((element[member] - element[member + 1]) == 1) return true;
    if ((element[member] - element[member + 1]) == -1) return true;
  }
  return false;
}

function neighborNo(element){
  for (var member = 1; member < 6; member++){
    console.log(element[member]);
    if ((element[member] - element[member + 1]) == 1) return false;
    if ((element[member] - element[member + 1]) == -1) return false;
  }
  return true;
}
//------------------------------------------------------------------------------
function multiple7Yes (element){
  for (var member = 1; member < 7; member++){
    if (element[member] % 7 == 0){
      return true;
   }
  }
  return false;
}
function multiple7No (element){
  for (var member = 1; member < 7; member++){
    if (element[member] % 7 == 0){
      return false;
   }
  }
  return true;
}
//------------------------------------------------------------------------------
function multiple10Yes (element){
  for (var member = 1; member < 7; member++){
    if (element[member] % 10 == 0){
      return true;
   }
  }
  return false;
}
function multiple10No (element){
  for (var member = 1; member < 7; member++){
    if (element[member] % 10 == 0){
      return false;
   }
  }
  return true;
}
//------------------------------------------------------------------------------
