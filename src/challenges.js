// Desafio 1
function compareTrue(a, b) {
 if(a === true && b === true ) {
  return true;
 } else if(a === false || b === false ){
  return false;
 } else {
   false
 }
}
 

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  arrayString = string.split(" ");
  return arrayString;
}


// Desafio 4
function concatName(array) {
  let fiirstElement = array.shift();
  let lastElement = array.pop();
  let stringConcat = "'" + lastElement + ", " + fiirstElement + "'";
  return stringConcat;
}


// Desafio 5
function footballPoints(wins, ties) {
  pointsWins = wins * 3;
  totalOfPoints = pointsWins + ties;
  return totalOfPoints
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
