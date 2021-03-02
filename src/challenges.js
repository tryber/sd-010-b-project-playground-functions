// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue && secondValue) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  let concat = `${lastIndex}, ${firstIndex}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  let result = wins + ties;
  return result;
}

// Desafio 6
function highestCount(numArray) {
  let repeatedNumbers = {};
  for (let index = 0; index < numArray.length; index += 1){
    if (repeatedNumbers[numArray[index]] === undefined){
      repeatedNumbers[numArray[index]] = 1;
    } else {
      repeatedNumbers[numArray[index]] += 1;
    }
  }
  return repeatedNumbers;
}
//REFERENCIA => Primeira parte do Gabarito do course da Trybe em exercício similar 
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

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
