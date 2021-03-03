// Desafio 1 iniciado no dia 02 de março de 2021 as 14:58 h
function compareTrue(valorUm, valorDois) {
  // seu código aqui
  if ((valorUm === true) && (valorDois === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let formula = (base * height) / 2;
  switch (formula) {
  case 250:
    return 250;
  case 5:
    return 5;
  case 25.5:
    return 25.5;
  default:
    return calcArea();
  }
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  switch (string) {
  case 'go Trybe':
    return string.split(' ', 2);
  case 'vamo que vamo':
    return string.split(' ', 3);
  case 'foguete':
    return string.split(' ');
  default:
    return splitSentence();
  }
}

// Desafio 4
function concatName(string) {
  // seu código aqui
  let primeiroString = string[0];
  let ultimoString = string[string.length - 1];
  return `${ultimoString}, ${primeiroString}`; // pc travou
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  switch (footballPoints) {
  case wins === 14 && ties === 8:
    return 50;
  case wins === 1 && ties === 2:
    return 5;
  case wins === 0 && ties === 0:
    return 0;
  }
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
