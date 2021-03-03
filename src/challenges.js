// Desafio 1
function compareTrue(a, b) {
  let require = false;

  if (a && b) {
    require = true;
  } else {
    require = false;
  }
  return require;
}

// Desafio 2
function calcArea(base, height) {
  let result = false;

  if (result = (base * height / 2)) {
    return result;
  }
}

//Desafio 3
// Fonte utilizada para esta parte:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(userEntry) {
  let arrayOfStrings = userEntry.split(" ");
  return arrayOfStrings;
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
