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
    if (" " ===frase[cont]) {
      split.push(temp);
      temp = [];
      cont += 1;
    } 
    temp += frase[cont];
  }
  split.push(temp);
  return split;
}

// Retorne o valor ['go', 'Trybe'] se a função receber a string 'go Trybe'

// Retorne o valor ['vamo', 'que', 'vamo']. se a função receber a string 'vamo que vamo'

// Retorne o valor ['foguete'] se a função receber a string 'foguete'



// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount(numeros) {
  let maior = 0;
  let contador = 0;
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (numeros[cont] > maior){
      maior = numeros[cont];
    }
  }
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (numeros[cont] == maior){;
      contador += 1;
    }
  }
  return contador;
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
