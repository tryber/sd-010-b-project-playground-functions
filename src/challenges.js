// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if ((value1 === true) && (value2 === true)) {
    return true;
  } else if (((value1 === false) && (value2 === true)) || ((value1 === true) && (value2 === false))) {
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(" ");
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return (array[0] + ", " + array[array.length - 1]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
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
