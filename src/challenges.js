// Desafio 1
function compareTrue(value1, value2) {
  // meu código aqui
  if( (value1 == true) && (value2 == true) ){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  // meu código aqui
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(toSplit) {
  // meu código aqui
  return toSplit.split(" ");
}

// Desafio 4
function concatName(reordArray) {
  // meu código aqui
  let arrayRet = [reordArray[reordArray.length - 1], reordArray[0]];
  return arrayRet;
}

// Desafio 5
function footballPoints(wins,ties) {
  // meu código aqui
  return ((wins*3)+(ties*1));
}

// Desafio 6
function highestCount(listNum) {
  // meu código aqui
  let higNum = 0;
  let countHig = 0;
  for (let i = 0; i < listNum.length; i++) {
    if(listNum[i] > higNum){
      higNum = listNum[i];
    }    
  }
  for (let i = 0; i < listNum.length; i++) {
    if(higNum == listNum[i]){
      countHig++;
    }    
  }
  return countHig;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
