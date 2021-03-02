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

  // Somente para finalidade de teste:
  // arrayDeStrings = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

  let first = [];
  first.push(arrayDeStrings[0]);

  let last = [];
  last.push(arrayDeStrings[arrayDeStrings.length - 1]);

  const arrayFinal = last + first;
  return arrayFinal;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const pontos = {
    eachWin: 3,
    eachTie: 1
  }

  const points = ((wins * pontos.eachWin) + (ties * pontos.eachTie));
    return points;
}

// O console.log() abaixo serve somente para finalidade de teste.
// console.log(footballPoints(1, 2));

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
