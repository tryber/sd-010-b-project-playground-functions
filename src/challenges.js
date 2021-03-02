// Desafio 1
function compareTrue(bool1, bool2) {
  let resultado = '';
  if (bool1 && bool2 === true) {
    resultado = true;
  } else if (bool1 && bool2 === false) {
    resultado = false;
  } else {
    resultado = false;
  }
  return resultado;
}
// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}
// console.log(calcArea(51, 1));
// Desafio 3
function splitSentence(string) {
  let resultado = string.split(' ');
  return resultado;
}
// console.log(splitSentence('foguete'));

// Desafio 4
// const array = ['captain', 'my', 'captain'];

function concatName(array) {
  let resultado = `${array[array.length - 1]}, ${array[0]}`;
  return resultado;
}
// console.log(concatName(array));

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties * 1;
  return resultado;
}
// console.log(footballPoints(0, 0));

// Desafio 6
// const array = [0, 0, 0];

function highestCount(array) {
  let numeroOrdenado = array.sort();
  let total = 1;
  for (let index in numeroOrdenado) {
    if (numeroOrdenado[index] === numeroOrdenado[index - 1]) {
      total += 1;
    } else {
      total = 1;
    }
  }

  return total;
}
// console.log(highestCount(array));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let ataqueBemSucedido = '';
  if (mouse < (cat1 < cat2)) {
    ataqueBemSucedido = 'cat1';
  } else if (mouse < (cat2 < cat1)) {
    ataqueBemSucedido = 'cat2';
  } else {
    ataqueBemSucedido = 'os gatos trombam e o rato foge';
  }
  return ataqueBemSucedido;
}
// console.log(catAndMouse(0, 7, 3));

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
