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
    if (arr[index] === highNumber) {
      totalHigh += 1;
    }
  }
  return totalHigh;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (cat1 > cat2) {
    return 'cat2';
  } else if (cat2 > cat1) {
    return 'cat1';
  } else {
    return 'Os gatos trombam e o rato foge';
  }
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
