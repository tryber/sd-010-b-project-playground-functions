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
 console.log(compareTrue(true,true))

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
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let fiirstElement = array.shift();
  let lastElement = array.pop();
  let stringConcat = "'" + lastElement + ", " + fiirstElement + "'";
  return stringConcat;
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']))

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
