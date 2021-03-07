// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(texto) {
  let result = texto.split(" ");
  return result;
}
console.log(splitSentence("Lara Capila"));

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length -1];
  return ultimo + ', ' + primeiro;
}
console.log(concatName(['Lara', 'Karoline', 'De', 'Oliveira', 'Capila']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let resultado = vitorias + empates;
  return resultado;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(numbers) {
  let maxNumber = 0;
  for (index = 0; index < numbers.length; index++) {
    if (numbers[index] > maxNumber) { 
      maxNumber = numbers[index];
    }
  }
  let cont = 0;
  for (index = 0; index < numbers.length; index++) {
    if (numbers[index] == maxNumber) { 
      cont ++;
    }
  }
  return cont;
}
console.log(highestCount([0, 0, 0]));

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
