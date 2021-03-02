// Desafio 1
function compareTrue(value1, value2) {
  let checker = false;
  if (value1 && value2) {
    checker = true;
  }
  return checker;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let concat = `${array[array.length - 1]}, ${array[0]}`;
  return concat;
}
console.log(concatName(['captain', 'my', 'captain']));
// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let greatestNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > greatestNumber) {
      greatestNumber = array[i];
    }
  }
  let counter = 0;
  for (let i2 = 0; i2 < array.length; i2 += 1) {
    if (greatestNumber == array[i2]) {
      counter += 1;
    }
  }
  return counter;
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
