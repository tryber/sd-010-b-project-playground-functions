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
function splitSentence(phrase) {
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
function concatName(Array = []) {
  // seu código aqui
  let endArray = '';
  let result = '';
  for (let index = 0; index < Array.length; index += 1) {
    if (index === Array.length - 1) {
      endArray = Array[index];
    }
  }
  result = `${endArray},${Array[0]}`;
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
}

// Desafio 6
function highestCount(numeros = []) {
  // seu código aqui
  let maior = numeros[0];
  let result = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maior) {
      maior = numeros[index];
      break;
    }
    if (numeros[index] === maior) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let alcanceCat1Mouse = cat1 - mouse;
  let alcanceCat2Mouse = cat2 - mouse;
  if (alcanceCat1Mouse < alcanceCat2Mouse) {
    let result = 'cat1';
    return result;
  } if (cat1 === cat2) {
    let result = 'os gatos trombam e o rato foge';
    return result;
  }
  let result = 'cat2';
  return result;
} console.log(catAndMouse(3, 2, 2));

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
