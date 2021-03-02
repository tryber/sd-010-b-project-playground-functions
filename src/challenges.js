// Desafio 1
let a = true;
let b = true;
function compareTrue(num1, num2) {
   if (num1 === true && num2 === true){
   return true;
  } else {
   return false;
 }
}
console.log(compareTrue(a, b))

// Desafio 2
let c = 5;
let d = 2;
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(c, d))

// Desafio 3
function splitSentence() {
  // seu código aqui
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
