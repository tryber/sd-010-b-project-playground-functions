// ok - Desafio 1
function compareTrue(boolean1, boolean2) {
  // Ref: https://stackoverflow.com/questions/45817581/replace-this-if-then-else-statement-by-a-single-return-statement //
  // Após sugestão do ESlint, usei a referência acima para refatoração do cógico, antes implementado com uso do IF/ELSE //
  return boolean1 && boolean2;
}
console.log('Resultado do 1º Desafio: ' + compareTrue(false, false));

// ok - Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
console.log('Resultado do 2° Desafio: ' + calcArea(51, 1));

// ok - Desafio 3
function splitSentence(sentence) {
  let wordsArray = sentence.split(" ");
  return wordsArray;
}
console.log('Resultado do 2° Desafio: ' + splitSentence('Go Trybe'));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
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
};
