// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if(a && b) {
    return true;
    }else {
      return false;
  };
};
console.log(compareTrue(0,1));

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;
};
console.log(calcArea(2,5));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separador = string.split(' ')
  return separador
}
console.log(splitSentence('Agora vai !!!'))

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
