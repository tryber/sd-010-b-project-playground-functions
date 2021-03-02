// Requisito 1 - Verificar se dois valores são verdadeiros
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}
console.log(compareTrue(false, true)); // -> false
console.log(compareTrue(false, false)); // -> false
console.log(compareTrue(true, true)); // -> true

// Requisito 2 - Calcular a área de um triángulo
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50)); // -> 250
console.log(calcArea(5, 2)); // -> 5
console.log(calcArea(51, 1)); // -> 25.5

// Desafio 3
function splitSentence() {
  // seu código aqui
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
