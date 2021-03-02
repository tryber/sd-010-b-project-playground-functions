// Desafio 1
function compareTrue(bool1, bool2) {
  let resultado = '';
  if (bool1 && bool2 === true) {
    resultado = true;
  } else if (bool1 && bool2 === false) {
    resultado = false;
  } else {
    resultado = false;
  }
  return resultado;
}
// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}
// console.log(calcArea(51, 1));
// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}
// console.log(splitSentence('foguete'));

// Desafio 4
// const array = ['captain', 'my', 'captain'];

function concatName(array) {
  let resultado = `${array[array.length-1]}, ${array[0]}`;
  return resultado;
}
// console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + (ties * 1);
  return resultado;
}
// console.log(footballPoints(0, 0));

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
