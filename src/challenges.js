// Desafio 1
function compareTrue(input1, input2) {
  if (input1 === true && input2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let stringSeparada = string.split(' ');
  return stringSeparada;
}

// Desafio 4
function concatName(items) {
  let lastItem = items[items.length - 1];
  let firstItem = items[0];
  let lastAndFirstItems = `${lastItem}, ${firstItem}`;

  return lastAndFirstItems;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = ((wins * 3) + ties);

  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
let higherNumber = numbers[0];
let repetitionHigherNumber = 0;

for (let x = 0; x < numbers.length; x ++) {
  if (numbers[x] > higherNumber) {
    higherNumber = numbers[x]
  }
}

for (let y = 0; y < numbers.length; y ++) {
  if (numbers[y] === higherNumber) {
    repetitionHigherNumber ++
  }
} 

return repetitionHigherNumber;
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
