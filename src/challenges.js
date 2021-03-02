// Desafio 1
function compareTrue(num1, num2) {
  // seu código aqui
  return num1 && num2;
}

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let stringResult = arr[arr.length - 1] + ', ' + arr[0];
  return stringResult;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let calcWins = wins * 3;
  let calcTies = ties * 1;
  let pontuationTotal = calcWins + calcTies;
  return pontuationTotal;
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let highNumber = Math.max.apply(Math, arr);
  let totalHigh = 0;
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] == highNumber) {
      totalHigh += arr[index];
    }
  }
  return totalHigh;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
