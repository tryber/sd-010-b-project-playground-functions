// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let result = string.split(' ');
  return result;
}

// Desafio 4
function concatName(stringName) {
  return stringName[stringName.length - 1] + ',' + stringName[0];
}
let stringName = ['foguete', 'não', 'tem', 'ré'];

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = ((wins * 3) + (ties * 1));
  return pontos;
}

// Desafio 6
function highestCount() {}
  
  
// Desafio 7
function catAndMouse(mouse,cat1, cat2) {
  let catnumber1 = Math.abs(mouse-cat1);
  let catnumber2 = Math.abs(mouse -cat2);
  if (catnumber1 < catnumber2) {
    return "cat1";
  } else if (catnumber2 < catnumber1) {
    return "cat2";
  } else {
    return "Os gatos trombam e o rato foge";
  }
}
// Desafio 8
function fizzBuzz() {
  
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
}
