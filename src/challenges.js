// Desafio 1
function compareTrue(A, B) {
  let retorno = false;
  if (A && B) {
    retorno = true;
  }
  return retorno;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let palavras = sentence.split(' ');
  return palavras;
}

// Desafio 4
function concatName(listaPalavras) {
  let concatenacao = '' + listaPalavras[listaPalavras.length - 1] + ', ' + listaPalavras[0] + '';
  return concatenacao;
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
