const { TestScheduler } = require("jest");

// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigh) {
  let areaTriangulo = (base * heigh)/2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(sentenca) {
  let separatedSentence = sentenca.split(' ');
  return separatedSentence;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  ultimoItem = array[array.length-1];
  primeiroItem = array[0];
  ultimoPrimeiro = ultimoItem + ", " + primeiroItem;
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 3;
  let pointstie = 1;
  let total = (wins * pointsWin) + (ties * pointstie);
  return total;
};

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  return Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse) ? 'cat1' :
  Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse) ? 'cat2'
  : 'os gatos trombam e o rato foge';
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
