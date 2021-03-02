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
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > highNumber) highNumber = numbers[i];
    if (highNumber === numbers[i]) counter += 1;
  };
  return counter;
}

console.log(highestCount());

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
