// Desafio 1
// let a = 1, b = 1;
// console.log(compareTrue(a, b));
function compareTrue(fisrtValue, secondValue) {
  if ((fisrtValue == true) && (secondValue == true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
// let base = 51, height = 1;
// console.log(calcArea(base, height));
function calcArea(base, height) {
  return ((base * height)/2);
}

// Desafio 3
// let sentence = "vamo que vamo";
// console.log(splitSentence(sentence));
function splitSentence(sentence) {
  let words = [];
  return words = sentence.split(" "); // I found the split() function at https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
}

// Desafio 4
// let array = ['captain', 'my', 'captain'];
// console.log(concatName(array));
function concatName(contact) {
  return contact[contact.length - 1].concat(', ',  contact[0]); // I found the concat() function at https://www.w3schools.com/jsref/jsref_concat_string.asp
}

// Desafio 5
// let win = 0, tie = 0;
// console.log(footballPoints(win, tie));
function footballPoints(wins, ties) {
  return ((wins * 3) + tie);
}

// Desafio 6
let numbers = [0, 0, 0];
console.log(highestCount(numbers));

function highestCount(arrayNumbers) {
  let bigger = 0, times = 1;
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] >= bigger) {
      bigger = arrayNumbers[i];
    }
    if (bigger === arrayNumbers[i+1]) {
      times++;
    }
  }
  return times
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
