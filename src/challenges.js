// Desafio 1
function compareTrue() {
  let valor1 = 1;
  let valor2 = 1;

  if (valor1 == valor2 && valor2 == valor1){
    return true;
  } else{
    return false;
  }
}

compareTrue();
////////////////////////////////////////////////////////////////////////////////////
// Desafio 2
function calcArea() {
  let base = 10;
  let height = 50;

  return (base * height) / 2;
}
calcArea();

/////////////////////////////////////////////////////////////////////////////////////
// Desafio 3
function splitSentence() {
  let frase = "Go trybe";
  let array = [];
  return frase + array;
}
splitSentence();

/////////////////////////////////////////////////////////////////////////////////////
// Desafio 4
function concatName() {
  let arrayString = ["Lucas", "Marcos", "João"];
  return arrayString[0] + " " + arrayString[2];
}
concatName();

//////////////////////////////////////////////////////////////////////////////////////
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
