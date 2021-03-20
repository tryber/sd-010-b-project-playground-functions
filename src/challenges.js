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
  if ((mouse - cat1) < (mouse - cat2)) {
    return "cat1";
  }
  else if ((mouse - cat2) < (mouse - cat1)) {
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
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
