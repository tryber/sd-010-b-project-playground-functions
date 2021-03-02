// Desafio 1
function compareTrue(valorUm, valorDois) {
  let resultado;
  if ((valorUm) && (valorDois)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  let array = [];
  array.push(word.split(' '));
  return array;
}

// Desafio 4
function concatName(arrayString) {
  let result = arrayString[arrayString.length - 1] + ', ' + arrayString[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + (ties)
  return points;
}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  let maiorNumero = 0;
  for (let key in array) {
    if (array[key] > maiorNumero) {
      maiorNumero = array[key];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      cont += 1;
    }
  }
  return cont;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let saida;
  if ((mouse - cat1) < (mouse - cat2)) {
    saida = "cat1";
  } else if ((mouse - cat2) < (mouse - cat1)) {
    saida = "cat2";
  } else {
    saida = "os gatos trombam e o rato foge"
  }
  return saida;
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
