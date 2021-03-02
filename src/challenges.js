// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1 === true && bool2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(anyString) {
  let array = [];
  let word = '';
  for(let index = 0; index < anyString.length; index +=1){
    if(anyString[index] === ' '){
      array.push(word);
      word = '';
    }else if(index == (anyString.length-1)){
      word = word + anyString[index];
      array.push(word);
    }else{
      word = word + anyString[index];
    }
  }
  return array;
}

// Desafio 4
function concatName(arrayString) {
  let firstItem = '';
  let lastItem = '';
  for(let index in arrayString){
    if(index == 0){
      firstItem = arrayString[index];
    } else if (index == (arrayString.length -1)){
      lastItem = arrayString[index];
    }
  }
  finalString = lastItem + ", " + firstItem;
  return finalString
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;

  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(arrayNumber) {
  let highestNumber = 0;
  for(let index in arrayNumber){
    if(arrayNumber[index] > highestNumber){
      highestNumber = arrayNumber[index];
    }
  }
  let quantityHighestNumber = 0;
  for(let index in arrayNumber){
    if(highestNumber == arrayNumber[index]){
      quantityHighestNumber  += 1;
    }
  }

  return quantityHighestNumber;
}
console.log(highestCount([0, 0, 0]))
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
