// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  const areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(stringRecebida) {
  const stringTransformada = stringRecebida.split(' ');
  return stringTransformada;
}

// Desafio 4
function concatName(arr) {
  const nomeConcatenado = `${arr[(arr.length) - 1]}, ${arr[0]}`;
  return nomeConcatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  const pontosGanhos = (wins * 3) + ties;
  return pontosGanhos;
}

// Desafio 6
function highestCount(arr) {
  let repeatGreatest = 0;
  const greatest = arr.reduce((acc, curr) => ((acc < curr) ? curr : acc));
  arr.forEach((number) => {
    if (number === greatest) repeatGreatest += 1;
  });
  return repeatGreatest;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distIgual = 'os gatos trombam e o rato foge';
  let cat1s = Math.abs(cat1 - mouse);
  let cat2s = Math.abs(cat2 - mouse);
  let phrase = '';

  if (cat1s < cat2s) {
    phrase = 'cat1';
    return phrase;
  } if (cat1s > cat2s) {
    phrase = 'cat2';
    return phrase;
  }
  return distIgual;
}

// Desafio 8
function fizzBuzz(numerosRecebidos) {
  let arrayResultado = [];
  numerosRecebidos.forEach((numero) => {
    if ((numero % 3) === 0 && (numero % 5) === 0) {
      arrayResultado.push('fizzBuzz');
    } else if ((numero % 3) === 0) {
      arrayResultado.push('fizz');
    } else if ((numero % 5) === 0) {
      arrayResultado.push('buzz');
    } else {
      arrayResultado.push('bug!');
    }
  });
  return arrayResultado;
}

// Desafio 9
function encode(stringTransformada) {
  stringTransformada = stringTransformada.replace(/a/g, '1');
  stringTransformada = stringTransformada.replace(/e/g, '2');
  stringTransformada = stringTransformada.replace(/i/g, '3');
  stringTransformada = stringTransformada.replace(/o/g, '4');
  stringTransformada = stringTransformada.replace(/u/g, '5');
  return stringTransformada;
}

function decode(stringTransformada) {
  stringTransformada = stringTransformada.replace(/1/g, 'a');
  stringTransformada = stringTransformada.replace(/2/g, 'e');
  stringTransformada = stringTransformada.replace(/3/g, 'i');
  stringTransformada = stringTransformada.replace(/4/g, 'o');
  stringTransformada = stringTransformada.replace(/5/g, 'u');
  return stringTransformada;
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
