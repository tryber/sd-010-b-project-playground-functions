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
    else if (numbers[i] % 5 == 0) result.push('buzz');
    else result.push('bug!');
  }
  return result;
}
let userNumbers = [2, 15, 7, 9, 45];
console.log(fizzBuzz(userNumbers));

// Desafio 9
function encode(word) {
  let encode = [];

  for (let i = 0; i < word.length; i += 1) {
    encode[i] = word[i];
  }

  for (let j = 0; j < encode.length; j += 1) {
    if (encode[j] === 'a') encode[j] = '1';
    if (encode[j] === 'e') encode[j] = '2';
    if (encode[j] === 'i') encode[j] = '3';
    if (encode[j] === 'o') encode[j] = '4';
    if (encode[j] === 'u') encode[j] = '5';
  }
  return encode.join('');
}
console.log(encode('Hi there!'));

function decode(word) {
  let decode = [];

  for (let i = 0; i < word.length; i += 1) {
    decode[i] = word[i];
  }

  for (let j = 0; j < decode.length; j += 1) {
    if (decode[j] === '1') decode[j] = 'a';
    if (decode[j] === '2') decode[j] = 'e';
    if (decode[j] === '3') decode[j] = 'i';
    if (decode[j] === '4') decode[j] = 'o';
    if (decode[j] === '5') decode[j] = 'u';
  }
  return decode.join('');
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
