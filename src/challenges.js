// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  let compara;
  if (param1 === true && param2 === true) {
    compara = true;
  } else {
    compara = false;
  }
  return compara;
}

// Desafio 2
function calcArea(height, base) {
  // seu código aqui
  return (height * base) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let split = str.split(" ")  //Fonte do ".split" = <https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254>
  return split
}

console.log(splitSentence("go Trybe"))

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
