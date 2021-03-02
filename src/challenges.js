// Desafio 1
function compareTrue(valueOne, valueTwo) {
  let response = valueOne && valueTwo;
  console.log("Resultado da comparação: " + response);

  return response;
}

// Desafio 2
function calcArea(base, height) {
  let response = (base * height) / 2;
  console.log("Área do Triângulo: "+ response);

  return response;
}

// Desafio 3
function splitSentence(stringSplit) {
  let arrayStrings = stringSplit.split(" ");
  console.log("Conteúdo do array: " + arrayStrings.join('/'));

  return arrayStrings;
}

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

compareTrue(false, false);
calcArea(10, 50);
splitSentence("Teste de Split");

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
