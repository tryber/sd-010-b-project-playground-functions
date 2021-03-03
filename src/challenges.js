// Desafio 1

let bool1 = false;
let bool2 = true;

function compareTrue(bool1, bool2) {
  if(bool1 === true && bool2 === true) {
    return true;
  }else {
    return false;
  }
}
console.log(compareTrue(bool1, bool2));

// Desafio 2

let base = 10;
let height = 50;

function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(base, height));

// Desafio 3

let phrase = "gabriel menezes dias dos santos";

function splitSentence(phrase) {
  let result = phrase.split(" ");
  return result;
}
console.log(splitSentence(phrase));

// Para resolver o exercício 3 eu consultei um artigo do DevMedia sobre split. src = https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.

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
