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
// seu código aqui
}

// Desafio 3
function splitSentence(string) {
  var result = string.split(" ")
  return result;
// seu código aqui
}

// Desafio 4
function concatName(stringName) {

}

// Desafio 5
function footballPoints(wins, ties) {
  var pontos = ((wins*3) + ( ties*1));
  return pontos;
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
}
console.log(compareTrue( true, false));
console.log(calcArea(5, 2));
console.log(splitSentence("go tybe"));
console.log(footballPoints(0,0));
