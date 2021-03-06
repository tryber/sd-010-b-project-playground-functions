// Desafio 1
function compareTrue(cond1, cond2) {
  let condicao;
  if (cond1 === true && cond2 === true) {
    condicao = true;
  } else {
    condicao = false;
  }
  return condicao;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(string) {
  let frase = string.split(' ');
  return frase;
}

// Desafio 4
function concatName(listaNomes) {
  let conc = (listaNomes[listaNomes.length - 1] + ', ' + listaNomes[0]);
  return conc;
}
let listaNomes = [];
console.log(concatName(listaNomes));

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = ((wins * 3) + ties);
  return pontuacao;
}
console.log(footballPoints());

// Desafio 6
function highestCount(numeros) {
  numeros.sort();
  let contador = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] >= numeros[numeros.length - 1]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    resultado = 'cat1';
  } else if ((Math.abs(mouse - cat1)) > (Math.abs(mouse - cat2))) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function FizzBuzz(numeros) {
  let listaArray = [];
  for (let i = 0; i < numeros.length; i ++) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      listaArray.push('fizzBuzz');
    } else if (numeros[i] % 5 === 0) {
      listaArray.push('Buzz');
    } else if (numeros[i] % 3 === 0) {
      listaArray.push('fizz');
    } else (listaArray.push('bug!'));
  }
  return listaArray;
}
//console.log(FizzBuzz([2, 15, 7, 9, 45]));

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
