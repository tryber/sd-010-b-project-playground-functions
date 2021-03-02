// Desafio 1
function compareTrue(valor1, valor2) {
  let isTrue = false;
  if ((valor1 && valor2)) {
    isTrue = true;
  }
  return isTrue;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let split = [];
  let temp = [];
  for (let cont = 0; cont < frase.length; cont += 1) {
    if (' ' === frase[cont]) {
      split.push(temp);
      temp = [];
      cont += 1;
    }
    temp += frase[cont];
  }
  split.push(temp);
  return split;
}

// Desafio 4
function concatName(nome) {
  return (nome[nome.length - 1] + ', ' + nome[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maior = 0;
  let contador = 0;
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (numeros[cont] > maior) {
      maior = numeros[cont];
    }
  }
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (numeros[cont] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 != cat2) {
    if (cat1 > cat2) {
      return 'cat2';
    }
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
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
