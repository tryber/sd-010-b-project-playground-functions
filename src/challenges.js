// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(fulName) {
  return fulName[fulName.length - 1] + ", " + fulName[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(values) {
  max = Math.max(...values); // https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
  var i = values.indexOf(max),
  // a seguir: https://stackoverflow.com/questions/36631641/javascript-indexof-method-with-multiple-values
  indexes = [];
  while (i !== -1) {
    indexes.push(i);
    i = values.indexOf(max, ++i);
  }
  return indexes.length;
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
