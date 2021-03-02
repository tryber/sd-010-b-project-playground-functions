// Desafio 1
function compareTrue(boolean1, boolean2) {
  let value1 = boolean1;
  let value2 = boolean2;
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}
// Desafio 3
function splitSentence(string) {
  let array = string;
  return array.split(" ");
}
// Desafio 4
function concatName(array) {
  let result = "";
  for (let index = array.length - 1; index >= 0; index -= 1) {
    if (index + 1 == array.length) {
      result = result += array[index];
    } else if (index == 0) {
      result = result += ", " + array[index];
    }
  }
  return result;
}
// Desafio 5
function footballPoints(pointsWins, pointsTies) {
  let wins = pointsWins * 3;
  let ties = pointsTies;
  let result = wins + ties;
  return result
}
// Desafio 6
function highestCount(numbers) {
  let cont = 0;
  let biggestNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (biggestNumber < numbers[index]) {
      biggestNumber = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (biggestNumber == numbers[index]) {
      cont += 1
    }
  }
  return cont;
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
