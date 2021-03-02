// Desafio 1
function compareTrue(value1, value2) {
  let result = null;
  if (value1 && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let splitedSentence = sentence.split(' ');
  return splitedSentence;
}
// Desafio 4
function concatName(arrayString) {
  let result = arrayString[arrayString.length - 1] + ', ' + arrayString[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let totalPoints = winsPoints + ties;
  return totalPoints;
}






// Desafio 6
function highestCount() {
  // seu código aqui
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
