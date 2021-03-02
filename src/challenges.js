// Desafio 1
function compareTrue(first, second) {
  let resultCompare;
  if (first && second === true) {
    resultCompare = true;
  } else {
    resultCompare = false;
  }
  return resultCompare;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(word) {
  // função split aprendida junto ao site: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings
  let sentence = word.split(' ');
  return sentence;
}

// Desafio 4
function concatName(arrayString) {
  let finalString = (arrayString[arrayString.length - 1] + ', ' + arrayString[0]);
  return finalString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let show = 0;
  let number = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {

    if (arrayNumbers[index] > number) {
      number = arrayNumbers[index];
      show = 0;
    }
    if (arrayNumbers[index] === number) {

      show += 1;
    }
  }
  return show;
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
