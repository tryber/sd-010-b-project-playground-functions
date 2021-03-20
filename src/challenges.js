// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(stringRecebida) {
  let stringTransformada = stringRecebida.split(' ');
  return stringTransformada;
}

// Desafio 4
function concatName(stringRecebida) {
  let nomeConcatenado = stringRecebida[(stringRecebida.length) - 1] + ', ' + stringRecebida[0];
  return nomeConcatenado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosGanhos = (wins * 3) + ties;
  return pontosGanhos;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maiorNumero = arrayNumeros[0];
  let quantidadeAparicoes = 0;
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (maiorNumero < arrayNumeros[index]) {
      maiorNumero = arrayNumeros[index];
    }
  }

  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (maiorNumero === arrayNumeros[index]) {
      quantidadeAparicoes += 1;
    }
  }

  return quantidadeAparicoes;
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
  }

  else if (cat1s > cat2s) {
    phrase = 'cat2';
    return phrase;
  }

  else {
    return distIgual;
  }
}

// Desafio 8
function fizzBuzz(numerosRecebidos) {
  let arrayResultado = [];
  for (let index = 0; index < numerosRecebidos.length; index += 1) {
    if ((numerosRecebidos[index] % 3) === 0 && (numerosRecebidos[index] % 5) === 0) {
      arrayResultado.push('fizzBuzz');
    }
    else if ((numerosRecebidos[index] % 3) === 0) {
      arrayResultado.push('fizz')
    }
    else if ((numerosRecebidos[index] % 5) === 0) {
      arrayResultado.push('buzz')
    }
    else {
      arrayResultado.push('bug');
    }
  }
  return arrayResultado;
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
