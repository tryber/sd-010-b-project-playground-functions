/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-plusplus */

// Desafio 1
function compareTrue(valueOne, valueTwo) {
  let response = valueOne && valueTwo;
  console.log(`Resultado da comparação: ${response}`);

  return response;
}

// Desafio 2
function calcArea(base, height) {
  let response = (base * height) / 2;
  console.log(`Área do Triângulo: ${response}`);

  return response;
}

// Desafio 3
function splitSentence(stringSplit) {
  let arrayStrings = stringSplit.split(' ');
  console.log(`Conteúdo do array:  ${arrayStrings.join('/')}`);

  return arrayStrings;
}

// Desafio 4
function concatName(arrayStrings) {
  let response = '';
  response = `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
  console.log(`Concatenação: ${response}`);

  return response;
}

// Desafio 5
function footballPoints(wins, ties) {
  let response = 0;
  response += wins * 3;
  response += ties;
  console.log(`Total de pontos: ${response}`);

  return response;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let response;
  let counter = 0;
  let larger = 0;

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > larger) {
      larger = arrayNumbers[i];
    }
  }

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (larger === arrayNumbers[i]) {
      counter++;
    }
  }

  response = counter;
  console.log(`Maior número: ${larger}, Repetições: ${response}`);

  return response;
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

let concat = ['João', 'Victor', 'Pistório', 'Martins'];
let numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9, 9];

compareTrue(false, false);
calcArea(10, 50);
splitSentence('Teste de Split');
concatName(concat);
footballPoints(14, 8);
highestCount(numbers);

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
