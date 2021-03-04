// Desafio 1
function compareTrue(a, b) {
  let require = false;

  if (a && b) {
    require = true;
  } else {
    require = false;
  }
  return require;
}

// Desafio 2
function calcArea(base, height) {
  let result = false;

  result = (base * height) / 2;
  return result;
}

// Desafio 3
// Fonte utilizada para esta parte:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254

function splitSentence(userEntry) {
  let arrayOfStrings = userEntry.split(' ');
  return arrayOfStrings;
}

// Desafio 4
// Fonte utilizada para esta parte:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://medium.com/@rodrigoum/3-maneiras-de-pegar-o-primeiro-e-%C3%BAltimo-elemento-de-um-array-com-javascript-56e92e6bf3f4

function concatName(arrayOfStrings1) {
  let lastFirst = (arrayOfStrings1[arrayOfStrings1.length - 1] + ', ' + arrayOfStrings1[0]);
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let up = wins * 3;
  let down = ties * 1;
  let totalPoints = up + down;
  return totalPoints;
}

// Desafio 6
// Para resolver esse trecho, me baseei no repositório do aluno Matheus Bodra
// https://github.com/tryber/sd-010-b-project-playground-functions/blob/matheus-bodra-project-playground-functions/src/challenges.js
function highestCount(arrayEntry) {
  let numeroMaior = false;
  let numertoTotal = false;

  for (let i = 0; i < arrayEntry.length; i += 1) {
    if (arrayEntry[i] > numeroMaior) {
      numeroMaior = arrayEntry[i];
    }return numeroMaior
  }

  for (let j = 0; j < arrayEntry.length; j += 1) {
    if (numeroMaior === arrayEntry[j]) {
      numertoTotal += 1;
    }
  }

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
