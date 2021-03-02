// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue(false,true));
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}
//console.log(calcArea(10,50));

// Desafio 3
function splitSentence(str) {
  let fraseDividida = str.split(" ");
  return fraseDividida;
}
//console.log(splitSentence("Mariana Mohr Silveira"));

// Desafio 4
function concatName(listaNomes) {
  let tamanhoLista = listaNomes.length;
  let nomes = listaNomes[tamanhoLista - 1] + ", " + listaNomes[0];
  return nomes;
}
//let listaNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
//console.log(concatName(listaNomes));

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
