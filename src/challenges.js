// Desafio 1
function compareTrue(bol, bole) {
  return bol && bole;
}
// exemplo de chamada da função: compareTrue(true, false);
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// exemplo de chamada da função: calcArea(10, 4);
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// exemplo de chamada da função: splitSentence("Xablau is life");
// Desafio 4
function concatName(array) {
  let space = ', ';
  return array[array.length - 1] + space + array[0];
}
// exemplo de chamada da função: concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']);
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
