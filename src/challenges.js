// Desafio 1
function compareTrue(a, b) {
  if (a === "true" && b === "true")
    return true;
  else {
    return false;
  }
} let compare = compareTrue("true", "true")
console.log(compare)

// Desafio 2
function calcArea(base, height) {
  calc = (base * height) / 2
  return calc;
}let area = calcArea(10, 5)
console.log(area)

// Desafio 3
function splitSentence(sentence) {
  let arr = sentence.split(" ");
  return arr;
} arrwords = splitSentence("foguete")
console.log(arrwords)

// Desafio 4
function concatName() {
  // seu código aqui
}

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
