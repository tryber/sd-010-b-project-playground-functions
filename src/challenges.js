// Desafio 1
function compareTrue(bool1, bool2) { 
  return bool1 && bool2 ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(concatName) {
  return concatName[concatName.length-1]+", " + concatName[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3)+ties;
}

// Desafio 6
function highestCount(highestCount) {
  let higher = 0;
  let repeat = 0;

  for (let index = 0; index < highestCount.length; index++) {
    if (highestCount[index] >= higher) {
      higher = highestCount[index];
    }
  }
  for (let index = 0; index < highestCount.length; index++) {
    if (highestCount[index] === higher) {
      repeat++;
    }
  }
  return repeat;
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

  console.log(highestCount([0, 0, 0]));

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
