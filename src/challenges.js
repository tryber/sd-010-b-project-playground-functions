// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  let compardor = false;
  if (valor1 === true && valor2 === true) {
    compardor = true;
  }
  return compardor
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  // go trybe
  let array = [];
  let palavra = "";
  for (let indexString = 0; indexString <= string.length ; indexString += 1) {
    if (string[indexString] === " " || indexString === string.length) {
      array.push(palavra);
      palavra = "";
    }else {
      palavra = palavra + string[indexString];
    }
  }
  return array;
}
// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let primeiro = arrayString[0] + ", ";
  let ultimo = arrayString[arrayString.length - 1];

  return ultimo + primeiro;
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
 //console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
