// Desafio 1
function compareTrue(valorUm, valorDois) {
  return valorUm && valorDois;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(word) {
  let array = [];
  array = word.split(' ');
  return array;
}
// Desafio 4
function concatName(arrayString) {
  let result = `${arrayString[arrayString.length - 1]}, ${(arrayString[0])}`;
  return result;
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + (ties);
  return points;
}
// Desafio 6
function maiorNumero(array) {
  let maior = 0;
  for (let key in array) {
    if (array[key] > maior) maior = array[key];
  }
  return maior;
}

function highestCount(array) {
  let cont = 0;
  let maior = maiorNumero(array);
  for (let key in array) {
    if (array[key] === maior) cont += 1;
  }
  return cont;
}
// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let saida;
  let unidadesCat1 = cat1 > mouse ? cat1 - mouse : mouse - cat1;
  let unidadesCat2 = cat2 > mouse ? cat2 - mouse : mouse - cat2;

  if (unidadesCat1 > unidadesCat2) {
    saida = 'cat2';
  } else if (unidadesCat1 < unidadesCat2) {
    saida = 'cat1';
  } else {
    saida = 'os gatos trombam e o rato foge';
  }
  return saida;
}
console.log(catAndMouse(4, 2, 5));

// Desafio 8
function Verifica(number) {
  if (number % 3 === 0 && number % 2 !== 0 && number % 5 !== 0) {
    return 'fizz';
  }
  if (number === 5 || number === 25) {
    return 'buzz';
  }
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  (number % 3 !== 0 && number % 5 !== 0);
  return 'bug!';
}

function fizzBuzz(arrayNumber) {
  let arraySaida = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    arraySaida[index] = Verifica(arrayNumber[index]);
  }
  return arraySaida;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode(word) {
  let resultado = word;
  for (let index = 0; index < resultado.length; index += 1) {
    resultado = resultado.replace('a', '1');
    resultado = resultado.replace('e', '2');
    resultado = resultado.replace('i', '3');
    resultado = resultado.replace('o', '4');
    resultado = resultado.replace('u', '5');
  }
  return resultado;
}

function decode(word) {
  let resultado = word;
  for (let index = 0; index < resultado.length; index += 1) {
    resultado = resultado.replace('1', 'a');
    resultado = resultado.replace('2', 'e');
    resultado = resultado.replace('3', 'i');
    resultado = resultado.replace('4', 'o');
    resultado = resultado.replace('5', 'u');
  }
  return resultado;
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
