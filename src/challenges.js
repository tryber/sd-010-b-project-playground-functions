// Desafio 1
function compareTrue(bol1, bol2) {
  if (bol1 === true && bol2 === true) {
    console.log('true');
  } else {
    console.log('false');
  }
} compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
} console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
} console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  let primeiroItem = array[0];
  let string = (ultimoItem + ', ' + primeiroItem); 
  return string;
} console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
} console.log(footballPoints(14, 8));

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
