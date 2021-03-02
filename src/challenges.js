// Desafio 1
function compareTrue(boola, boolb) {
  return ((boola === true) && (boolb === true));
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;

  return area;
}

// Desafio 3
function splitSentence(frase) {
  let separado = frase.split(' ');
  return separado;
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  let resposta = `${array[array.length - 1]} , ${array[0]}`;
  return resposta;
}

// Desafio 5
function footballPoints(wins, ties) {
  let quantidadePontos = wins * 3 + ties;
  return quantidadePontos;
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
