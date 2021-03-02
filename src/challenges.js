// Desafio 1
function compareTrue(val1, val2) {
  // seu código aqui
  if (val1 === true && val2 === true) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calcularArea = (base * height) / 2;
  return calcularArea;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let arrayString = sentence.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  let stringAux = arrayStrings; 
  let stringConcat = stringAux.pop() + ', ' + stringAux.shift();  
  return stringConcat;
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
