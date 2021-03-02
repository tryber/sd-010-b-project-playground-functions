// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  let array = text.split(' ');
  return array;
  /* fonte de conhecimento
  developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
}

// Desafio 4
function concatName(array) {
  let ultimoArray = array.length - 1;
  let primeiroUltimo = array[ultimoArray] + array[0];
  return primeiroUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(contador) {
}

// Desafio 7
function catAndMouse(couse, cat1, cat2) {
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
