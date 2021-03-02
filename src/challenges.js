// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } 
    return false
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  return base * height / 2
  // seu código aqui
} 
console.log(calcArea(20, 10))


// Desafio 3
function splitSentence(frase) {
const splits = frase.split(" ", frase.length-1)
return splits;
  // seu código aqui
} console.log(splitSentence("go trybe mano"))

// Desafio 4
function concatName(frase) {
  var ultimoItem = frase[frase.length-1];
  var primeiroItem = frase[0]
  const splits = ultimoItem + " " + primeiroItem
return splits
} console.log(concatName(['foguete', 'não', 'tem', 'ré']))
  // seu código aqui


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
