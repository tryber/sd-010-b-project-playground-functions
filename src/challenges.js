// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  resultado = frase.split(" ");
  return resultado;
}
// Auxilio por orientação:
// https://www.w3schools.com/jsref/jsref_split.asp

// Desafio 4
function concatName(array) {
  ultimoValor = array.length - 1
  resultado = array[ultimoValor] + ", " + array[0]
  return resultado
}

// Desafio 5
function footballPoints(wins, ties) {
  pontos = (wins * 3 + ties);
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  
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

