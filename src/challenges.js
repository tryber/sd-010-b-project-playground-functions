// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(myString) {
  return myString.split(' ');
}

// Desafio 4
function concatName(myArray) {
  return myArray[myArray.length - 1] + myArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + 1 * ties;
}

// Desafio 6
function highestCount(array) {
  let higherNumber = 0;
  let repeatedTimes = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > higherNumber) {
      higherNumber = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (higherNumber === array[index]) {
      repeatedTimes += 1;
    }
  }
  return repeatedTimes;
}

// Desafio 7
function catAndMouse() {
  let positionOne = 0;
  let positionTwo = 0;

  
}

// Desafio 8
function fizzBuzz(myArray) {
  let newArray = [];
  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] % 3 === 0 && myArray[index] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (myArray[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (myArray[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
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
