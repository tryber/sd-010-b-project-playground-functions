// Desafio 1
function compareTrue(a, b) {
  let resposta;
  if (a === true && b === true) {
    resposta = true;
  } else {
    resposta = false;
  }
  return resposta;
}
console.log(compareTrue(true, true));
console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence() {
  let string = "go Trybe";
  let resultado = string.split(" ");
  return resultado;
}
console.log(splitSentence());

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
