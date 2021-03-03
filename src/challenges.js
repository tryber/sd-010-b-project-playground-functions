// Desafio 1
function compareTrue(boolean1, boolean2) {
  let bolfalse = false;
  if (boolean1 === true && boolean2 === true) {
    bolfalse = true;
  }
  return bolfalse;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(frase) {
  let palavras = frase.split(' ');
  return palavras;
}
// Desafio 4
function concatName(array) {
  const concatenated = `${array[(array.length - 1)]}, ${array[0]}`;

  return concatenated;
}
// Desafio 5
function footballPoints(wins, ties) {
  const totalpoints = (wins * 3) + ties;

  return totalpoints;
}
// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if ((Math.abs(mouse - cat1) > Math.abs(mouse - cat2))) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
