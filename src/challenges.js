// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) return true;
  return false;
}

console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(word) {
  let result = word.split(' ');
  return result;
}

console.log(splitSentence('vamo que vamo!'));

// Desafio 4
function concatName(name) {
  return name[name.length-1] + ' ' + name[0];
}

array = ['foguete', 'não', 'tem', 'ré'];
console.log(concatName(array))

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
