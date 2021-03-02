// Desafio 1
function compareTrue(a, b) {
// seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}
// console log
console.log(compareTrue(true, false));
console.log(compareTrue(true, true));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
// console log
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
let splitor = ' ';
let arrayString = [];
function splitSentence(frase) {
  // seu código aqui
  for (let index = 0; index < frase.length; index += 1) {
    arrayString = frase.split(splitor);
  }
  return arrayString;
}
//
console.log(splitSentence('foguete'));
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo tribo'));
console.log(splitSentence('O rato roeu a roupa do rei de Roma'));

// Desafio 4
let last;
function concatName(fullName) {
  // seu código aqui
  for (let index = 0; index < fullName.length; index += 1) {
    last = index;
  }
  return `${fullName[last]}, ${fullName[0]}`;
}
// console log
console.log(concatName(['Angelo', 'Gabriel', 'Pires', 'Bittencourt', 'Lordello']));
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}
// console log
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));
console.log(footballPoints(7, 20));

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
