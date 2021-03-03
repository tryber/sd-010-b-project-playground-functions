/* eslint-disable no-continue */
// Desafio 1
function compareTrue(firstValue, secondValue) {
  // seu código aqui
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase = '') {
  // seu código aqui
  let letter = ' '; let word = '';
  let result = [];
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === letter) {
      result.push(word);
      word = '';
      continue;
    }
    word += phrase[index];
    if (index >= phrase.length) {
      result.push(word);
    }
  } result.push(word);
  return result;
}

// Desafio 4
function concatName(array = []) {
  // seu código aqui
  let endArray = '';
  let result = '';
  for (let index = 0; index < array.length; index += 1) {
    if (index === array.length - 1) {
      endArray = array[index];
    }
  }
  result = `${endArray},${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let ptsWins = 0;
  let result = 0;
  ptsWins = wins * 3;
  result = ptsWins + ties;
  return result;
}// console.log(footballPoints(14, 8));

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
