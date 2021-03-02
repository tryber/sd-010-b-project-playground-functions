// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }else if ( valor1 === true && valor2 === false || valor1 === false && valor2 === true) {
    return false;
  } else if (valor1 === false && valor2 === false) {
    return false;
  }
}
console.log(compareTrue(false, false)); 
// Desafio 2
function calcArea(base, altura) {
  let calcArea = (base * altura) / 2;
  return calcArea;  
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence() { // Referencias: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split  
  let myString = 'Vamos que vamos';
  let splits = myString.split(' ',);
  return splits;
}
console.log(splitSentence());

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
