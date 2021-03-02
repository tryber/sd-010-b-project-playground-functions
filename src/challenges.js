// Desafio 1
function compareTrue(boola, boolb) {
  return ((boola === true) && (boolb === true));
}

// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;

  return area;
}

// Desafio 3
function splitSentence(frase) {
  let separado = frase.split(' ');
  return separado;
}

console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(arrayDePalavras) {
  let resposta = `${arrayDePalavras[arrayDePalavras.length - 1]} , ${arrayDePalavras[0]}`;
  return resposta;
}

// Desafio 5
function footballPoints(wins, ties) {
  let quantidadePontos = wins * 3 + ties;
  return quantidadePontos;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let contagem = { };
  let maiorNumero = 0;
  for (let itens of arrayDeNumeros) {
    contagem[itens] = 0;
  }
  for (let itens of arrayDeNumeros) {
    contagem[itens] += 1;
  }
  for (let itens in arrayDeNumeros) {
    if (itens > maiorNumero) {
      itens = maiorNumero;
    }
  }
  return contagem[maiorNumero];
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
