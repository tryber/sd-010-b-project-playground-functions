// Desafio 1
function compareTrue(n1, n2) {
  let compare = false;
  if (n1 > 0 && n2 > 0) {
    compare = true;
  }
  return compare;
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  let palavras = frase.split(" ");
  return palavras;
}

// Desafio 4
function concatName(contacts) {
  let fistLast = contacts.split(" ");
  return `${fistLast[fistLast.length -1]}, ${fistLast[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (ties + (wins * 3));
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
