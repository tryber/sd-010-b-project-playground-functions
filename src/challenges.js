// Desafio 1
let message;
function compareTrue(info1, info2) {
  if (info1 == info2 && info2 == info1) {
    message = 'true';
  } else {
    message = 'false';
  }
  return message;
}
console.log(compareTrue('maria','maria'));

// Desafio 2
function calcArea(base,heigth) {
    let triangleArea = (base*heigth)/2;
    return triangleArea;
} 
console.log(calcArea(10,50));
console.log(calcArea(5,2));
console.log(calcArea(51,1));

// Desafio 3 - fonte de pesquisa https://www.devmedia.com.br/javascript-split-
let string;

function splitSentence(string) {
  result = string.split(" "); 
  return result;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

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
 */