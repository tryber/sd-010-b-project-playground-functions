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
function concatName(name) {
  name = ['foguete', 'não', 'tem', 'ré'];
  return name[name.length - 1] + name[0];
}
console.log(concatName());

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(numbers) {
  numbers = [9, 1, 2, 3, 9, 5, 7];
  let highNumber = 0; let counter = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highNumber) highNumber = numbers[index];
    if (highNumber === numbers[index]) counter += 1;
  }
  return counter;
}
console.log(highestCount());

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  let distance1 = (cat1 - mouse); let distance2 = (cat2 - mouse);
  if (distance1 < distance2) return 'cat1';
  if (distance2 < distance1) return 'cat2';
  if (distance1 === distance2) return 'The cat crashs and the mouse runs away';
}
console.log(catAndMouse(4, 4, 2));

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 15 === 0) result.push('fizzBuzz');
    else if (numbers[index] % 3 === 0) result.push('fizz');
    else if (numbers[index] % 5 === 0) result.push('buzz');
    else result.push('bug!');
  }
  return result;
}

let userNumbers = [2, 15, 7, 9, 45];
console.log(fizzBuzz(userNumbers));

// Desafio 9
function encode() {
  
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
