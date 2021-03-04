// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) return true;
  return false;
}
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(word) {
  let result = word.split(' ');
  return result;
}
console.log(splitSentence('vamo que vamo!'));

// Desafio 4
function concatName(word) {
  return `${word[word.length - 1]} ${word[0]}`;
}
let userWord = ['foguete', 'não', 'tem', 'ré'];
console.log(concatName(userWord));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(numbers) {
  numbers = [9, 1, 2, 3, 9, 5, 7];
  let highNumber = 0; let counter = 0;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > highNumber) highNumber = numbers[i];
    if (highNumber === numbers[i]) counter += 1;
  }
  return counter;
}
console.log(highestCount());

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = (cat1 - mouse); let distance2 = (cat2 - mouse);
  if (distance1 < distance2) return 'cat1';
  if (distance2 < distance1) return 'cat2';
  if (distance1 === distance2) return 'The cat crashs and the mouse runs away';
}
console.log(catAndMouse(2, 4, 4));

// Desafio 8
let result = [];
function fizzBuzz(numbers) {
  for (let i in numbers) {
    if (numbers[i] % 15 === 0) result.push('fizzBuzz');
    else if (numbers[i] % 3 === 0) result.push('fizz');
    else if (numbers[i] % 5 === 0) result.push('buzz');
    else result.push('bug!');
  }
  return result;
}
let userNumbers = [2, 15, 7, 9, 45];
console.log(fizzBuzz(userNumbers));

// Desafio 9
function encode(word) {
  let codeArray = [];

  for (let i = 0; i < word.length; i += 1) {
    codeArray[i] = word[i];
  }
  for (let j = 0; j < codeArray.length; j += 1) {
    if (codeArray[j] === 'a') codeArray[j] = '1';
    if (codeArray[j] === 'e') codeArray[j] = '2';
    if (codeArray[j] === 'i') codeArray[j] = '3';
    if (codeArray[j] === 'o') codeArray[j] = '4';
    if (codeArray[j] === 'u') codeArray[j] = '5';
  }
  return codeArray.join('');
}
console.log(encode('Hi there!'));

function decode(word) {
  let decodeArray = [];

  for (let i = 0; i < word.length; i += 1) {
    decodeArray[i] = word[i];
  }
  for (let j = 0; j < decodeArray.length; j += 1) {
    if (decodeArray[j] === '1') decodeArray[j] = 'a';
    if (decodeArray[j] === '2') decodeArray[j] = 'e';
    if (decodeArray[j] === '3') decodeArray[j] = 'i';
    if (decodeArray[j] === '4') decodeArray[j] = 'o';
    if (decodeArray[j] === '5') decodeArray[j] = 'u';
  }
  return decodeArray.join('');
}
console.log(decode('H3 th2r2!'));

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
