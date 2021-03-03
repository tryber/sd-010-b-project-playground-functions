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
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let animalWin = "";
  if (distCat1 > distCat2) {
    animalWin = "cat2";
  } else if (distCat1 < distCat2) {
    animalWin = "cat1";
  } else {
    animalWin = "os gatos trombam e o rato foge";
  }
  return animalWin;
}

console.log(catAndMouse(7, 8, 12))

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
