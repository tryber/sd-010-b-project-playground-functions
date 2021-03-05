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
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }
  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'cat2';
}
result = catAndMouse(1, 0, 2);
console.log(result);

// Desafio 8
function evaluator(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let newList = [];
  for (let i = 0; i < numbers.length; i += 1) {
    let number = numbers[i];
    let resultEvaluator = evaluator(number);
    newList.push(resultEvaluator);
  }
  return newList;
}

result = fizzBuzz([2, 15, 7, 9, 45]);
console.log(result);

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
