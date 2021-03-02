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
function catAndMouse(mouse, cat1, cat2) {
  let winner = "";
  if (cat1 < cat2 && cat1 > mouse) {
    winner = "cat1";
  } else if (cat2 < cat1 && cat2 > mouse) {
    winner = "cat2";
  } else {
    winner = "os gatos trombam e o rato foge";
  }
  return winner;
}
// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      result[index] = "fizzBuzz";
    } else if (numbers[index] % 3 === 0) {
      result[index] = "fizz";
    } else if (numbers[index] % 5 === 0) {
      result[index] = "buzz";
    } else {
      result[index] = "bug!"
    }
  }
  return result;
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
