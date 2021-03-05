// Desafio 1
function compareTrue(num1, num2) {
  if (num1 >= 0 && num2 <= 10) {
    return true;
  }
  else {
    return false;
  }
}
// Desafio 2
function calcArea(base, heigth) {
  let calculo = (base*heigth)/2;
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  let separar = frase.split(" ")
  return separar;
}

// Desafio 4
function concatName(nomes) {
  let nomes = [];
  let primeiroItem = nomes[0];
  let ultimoItem  = nomes.lastIndexOf();
  return ultimoItem + primeiroItem;
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
