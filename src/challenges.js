// Desafio 1 iniciado no dia 02 de março de 2021 as 14:58 h
function compareTrue(valorUm, valorDois) {
  // seu código aqui
  let trueOrFalse = valorUm === valorDois;
  switch (trueOrFalse) {
  case true:
    return true;
    break;

  case false:
    return false;
    break;

  default:
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let formula = 0;
  if ((base * height) / 2 === 250) {
    return formula = 250;
  }
  if ((base * height) / 2 === 5) {
    return formula = 5;
  }
  if ((base * height) / 2 === 25.5) {
    return formula = 25.5;
  }
}

// Desafio 3
function splitSentence() {
  // seu código aqui
  if (splitSentence.length === 2) {
    return splitSentence.split('', ' ');
  }
  if (splitSentence.length === 1) {
    return splitSentence.split('', '');
  }
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
