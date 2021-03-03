// Desafio 1
function compareTrue(parameter1, parameter2) {
  // seu código aqui
  let resultCompare = parameter1 && parameter2;
  return resultCompare;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let separedeSentence = sentence;
  let resultSentence = separedeSentence.split(' ');
  return resultSentence;
}

// Desafio 4
function concatName(arrayParameter) {
  // seu código aqui
  let searchLastName = arrayParameter[arrayParameter.length - 1];
  let searchFirstName = arrayParameter[0];
  let resultConcat = searchLastName + ", " + searchFirstName;
  return resultConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let highestNumber = arrayNumbers[0];
  let howManyTimes = 0;
  for (let index = 1; index < arrayNumbers.length; index +=1) {
    if (arrayNumbers[index] > highestNumber) {
      highestNumber = arrayNumbers[index];
    }
  }
  for (let index2 = 0; index2 < arrayNumbers.length; index2 +=1) {
    if (arrayNumbers[index2] === highestNumber) {
      howManyTimes +=1;
    }
  }
  return howManyTimes;
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
