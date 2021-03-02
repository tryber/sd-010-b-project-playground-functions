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
  let resposta = `${arrayDePalavras[arrayDePalavras.length - 1]}, ${arrayDePalavras[0]}`;
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
  for (let itens of arrayDeNumeros) {
    if (itens > maiorNumero) {
      maiorNumero = itens;
    }
  }
  return contagem[maiorNumero];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let alcancaPrimeiro = '';

  if (distCat1 < distCat2) {
    alcancaPrimeiro = 'cat1';
  }
  if (distCat2 < distCat1) {
    alcancaPrimeiro = 'cat2';
  }
  if (distCat1 === distCat2) {
    alcancaPrimeiro = 'os gatos trombam e o rato foge';
  }
  return alcancaPrimeiro;
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let resposta = [];
  for (let index = 0; index < arrayDeNumeros.length; index += 1) {
    if ((arrayDeNumeros[index] % 3 === 0) && (arrayDeNumeros[index] % 5 === 0)){
      resposta.push('fizzbuzz');
    }
    else if (arrayDeNumeros[index] % 3 === 0){
      resposta.push('fizz');
    }
    else if (arrayDeNumeros[index] % 5 === 0){
      resposta.push('buzz');
    }
    else {
      resposta.push('bug!');
    }
  }
  return resposta;
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
