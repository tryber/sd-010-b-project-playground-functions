// Desafio 1
function compareTrue(a, b) {
  let confirma = false;
  return a === true && b === true ? !confirma : confirma;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(a) {
  let dado = a.split(' ');
  return dado;
}

// Desafio 4
function concatName(a) {
  let dado = [];
  dado.push(a.pop());
  dado.push(a[0]);
  dado = dado.join(', ');
  return dado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let a = wins * 3;
  return a + ties;
}

// Desafio 6
function highestCount(a) {
  let maior = Math.max.apply(null, a);
  let count = 0;
  let idx = a.indexOf(maior);
  while (idx !== -1) {
    count += 1;
    idx = a.indexOf(maior, idx + 1);
  }
  return count;
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
