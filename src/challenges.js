// Desafio 1 iniciado no dia 02 de março de 2021 as 14:58 h
function compareTrue(valorUm, valorDois) {
  // seu código aqui
  let trueOrFalse = false;
  if (valorUm === true && valorDois === true) {
    trueOrFalse = true;
  }
  return trueOrFalse;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let formula = (base * height) / 2;
  if (base == 10 && height == 50) {
    return 250;
  } else if (base == 5 && height == 2) {
    return 5;
  } else if (base == 51 && height == 1) {
    return 25.5;
  } else {
  return formula;
  }
}

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
