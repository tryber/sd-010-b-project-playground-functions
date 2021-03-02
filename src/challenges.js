// Desafio 1
function compareTrue(boolean1, boolean2) {
  if(boolean1 === true && boolean2 === true){
    return true;
  } else {
    return false;
  }
 
}
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, altura) {
  
  return (base * altura) / 2;
}
console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(a) {
  frase = a
  return a.split(" ")
}

console.log(splitSentence('foguete'))

// Desafio 4
function concatName() {
  
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
