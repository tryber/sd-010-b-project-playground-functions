// Desafio 1
function compareTrue(boolean1, boolean2) {
  let value1 = boolean1;
  let value2 = boolean2;
  if(value1 === true && value2 === true){
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let result = (base*height)/2;
  return result;
}
// Desafio 3
function splitSentence(string) {
  let array = string;
  return array.split(" ");
}
// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
