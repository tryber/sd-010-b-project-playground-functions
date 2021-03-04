// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  if (num1 == num2 && num2 ==  num1) {
    return true;
  }
  else {
    return false;
  }
}
// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  let calculo = (base*heigth)/2;
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let separar = frase.split(" ")
  return separar;
}

// Desafio 4
function concatName(itens) {
  // seu código aqui
  let firstItem = itens[0];
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
