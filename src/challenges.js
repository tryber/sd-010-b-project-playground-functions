// Desafio 1
function compareTrue(booleanValue1, booleanValue2) {
  let booleanReturn;
  (booleanValue1 && booleanValue2) ? booleanReturn = true : booleanReturn = false;
  return booleanReturn;
}

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(str) {
  let splitStrings = str.split(" ");
  return splitStrings;
}

// Desafio 4
function concatName(arr) {
  const arrayStrings = arr;
  let returnString = `${arrayStrings[0]}, ${arrayStrings[arrayStrings.length - 1]}`;
  return returnString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return `${wins * 3 + ties} pontos`;
}

// Desafio 6
function highestCount(arrNumbers) {
  let maior = 0;
  let count = 0;
  for (const key in arrNumbers) {
    if (arrNumbers[maior] <= arrNumbers[key]) {
      maior = arrNumbers[key];
    }
  }
  for (const key in arrNumbers) {
    if (maior === arrNumbers[key]) {
      count += 1;
    }
  }
  return count;
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
