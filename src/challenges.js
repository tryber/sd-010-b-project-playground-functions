// ok - Desafio 1
function compareTrue(boolean1, boolean2) {
  // Ref: https://stackoverflow.com/questions/45817581/replace-this-if-then-else-statement-by-a-single-return-statement
  // Após sugestão do ESlint, usei a referência acima para refatoração do cógico, antes implementado com uso do IF/ELSE
  return boolean1 && boolean2;
}
console.log(compareTrue(false, false));

// ok - Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
  }
console.log(calcArea(51, 1));

// ok - Desafio 3
function splitSentence(sentence) {
  return(sentence.split(' '));
}
console.log(splitSentence('Go Trybe'));

// ok - Desafio 4
function concatName(stringsArray) {
  let ultimoPrimeiroItem = (stringsArray[stringsArray.length -1] + ", " + stringsArray[0]);
  return ultimoPrimeiroItem;
}
console.log(concatName( ['captain', 'my', 'captain']));

// 0k - Desafio 5
function footballPoints(wins, ties) {
  let earnedPoints = ((wins * 3) + (ties * 1));
  return earnedPoints;
}
console.log( footballPoints(0, 0));

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
