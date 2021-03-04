// Desafio 1
function compareTrue(item1, item2) {
  if (item1 && item2 === true) {
    return true;
  }
  if (item1 === false || item2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(content) {
  return content.split(' ');
}

// Desafio 4
function concatName(thingy) {
  return thingy[-1] && thingy[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let win = wins * 3;
  return win + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}
console.log(highestCount());
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
