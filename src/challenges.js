// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
}
let result = compareTrue(false, false);
console.log(result);

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
result = calcArea(10, 50);
console.log(result);

// Desafio 3 - Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split / para utilização do .split('')
let phrase = 'go Trybe';

function splitSentence(string) {
  let splitWord = string.split(' ');
  return splitWord;
}
result = splitSentence(phrase);
console.log(result);

// Desafio 4 - Source: https://eslint.org/docs/rules/prefer-template / `${}` para concatenação
let listWords = ['foguete', 'não', 'tem', 'ré'];

function concatName(list) {
  let firstIndex = list[0];
  let lastIndex = list[list.length - 1];
  return `${lastIndex}, ${firstIndex}`;
}
result = concatName(listWords);
console.log(result);

// Desafio 5 - Source: https://www.w3schools.com/js/js_assignment.asp / *= operador de atribuição para multiplicação
function footballPoints(wins, ties) {
  if (wins > 0) {
    wins *= 3;
  }
  return wins + ties;
}
result = footballPoints(14, 8);
console.log(result);

// Desafio 6
function findHigherNumber(numbers) {
  let higherNumber = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > higherNumber) {
      higherNumber = numbers[i];
    }
  }
  return higherNumber;
}

function highestCount(numbers) {
  let timesAppears = 0;
  let higherNumber = findHigherNumber(numbers);
  for (let j = 0; j < numbers.length; j += 1) {
    if (numbers[j] === higherNumber) {
      timesAppears += 1;
    }
  }
  return timesAppears;
}
result = highestCount([9, 1, 2, 3, 9, 5, 7]);
console.log(result);

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
