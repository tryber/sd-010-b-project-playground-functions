// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}

// teste item 1
// console.log(compareTrue(true, true));
// console.log(compareTrue(false, true));
// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// teste item 2
// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(umaFrase) {
  return umaFrase.split(" ");
}

// teste item 3
// console.log(splitSentence("go Trybe"))
// console.log(splitSentence("vamo que vamo"))
// console.log(splitSentence("foguete"))

// Desafio 4
function concatName(umaLista) {
  let concat = umaLista[umaLista.length -1] + ", " + umaLista[0];
  return concat;
}

// teste item 4
// array0 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// array1 = ['foguete', 'não', 'tem', 'ré'];
// array2 = ['captain', 'my', 'captain'];
// console.log(concatName(array0));
// console.log(concatName(array1));
// console.log(concatName(array2));


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
