// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(string) {
  array = [];
  splittedString = '';
  for (let index in string) {
    if (string[index] == ' ') {
      array.push(splittedString);
      splittedString = ''
    } else {
      splittedString += string[index]
    }
  }
  array.push(splittedString);
  return array
}

// Desafio 4
function concatName(array) {
  firstName = '';
  lastName = '';
  for (let index in array) {
      if (index == 0) {
          lastName = array[index];
      } else if (index == array.length - 1) {
          firstName = array[index]
      }
  }
  let newName = `${firstName}, ${lastName}`;
  return newName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return (winsPoints + tiesPoints);
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
