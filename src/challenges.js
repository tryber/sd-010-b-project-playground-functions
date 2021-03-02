// Desafio 1
function compareTrue(firstCondition, secondCondition) {
  // seu código aqui
  if (firstCondition === true && secondCondition === true) {
    return true;
  }
  return false;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(compareTrue(1 + 2 === 3, true));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  const separaFrase = frase.split(' ');

  // Usando a função sting split (que aprendi usando o site: https://www.w3schools.com/jsref/jsref_split.asp):
  return separaFrase;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(splitSentence("Eu sou um teste"));

// Desafio 4
function concatName(arrayDeStrings) {
  // seu código aqui

  //Somente para finalidade de teste:
  //arrayDeStrings = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

  let first = arrayDeStrings[0] + "'";
  let last = "'" + arrayDeStrings[arrayDeStrings.length - 1];

  return (last + ", " + first);
}

// O console.log() abaixo serve somente para finalidade de teste.
//console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'));

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
