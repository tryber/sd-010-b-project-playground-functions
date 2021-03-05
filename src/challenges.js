// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
if (valor1 == true && valor2 == true) {
  return true;
}
else {
  return false;
}
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
let areatriangulo;
areatriangulo = (base * height) / 2;
return areatriangulo;

}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(matrix) {
  // seu código aqui
let primeiroNome = matrix[0];
let ultimoNome = matrix[matrix.length -1];
let resultado = ultimoNome + ", " + primeiroNome;
  
 return resultado;
  
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontuacao;
  pontuacao = (wins * 3 + ties * 1);
  return pontuacao;
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
