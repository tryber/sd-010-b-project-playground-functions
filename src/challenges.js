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
  let resultConcat = searchLastName + ', ' + searchFirstName;
  return resultConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Desafio 6
function highestCount(terms) {
  // seu código aqui
  let highestNumber = terms[0];
  let howManyTimes = 0;
  for (let index = 1; index < terms.length; index += 1) {
    if (terms[index] > highestNumber) {
      highestNumber = terms[index];
    }
  }
  for (let index2 = 0; index2 < terms.length; index2 += 1) {
    if (terms[index2] === highestNumber) {
      howManyTimes += 1;
    }
  }
  return howManyTimes;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let someNumbers = numbers;
  let words =  [];
  for (index = 0; index < someNumbers.length; index += 1) {
    if (someNumbers[index] % 3 === 0 && someNumbers[index] % 5 !== 0) {
      words.push('fizz');
    } else if (someNumbers[index] % 3 !== 0 && someNumbers[index] % 5 ===0) {
      words.push('buzz');
    } else if (someNumbers[index] % 3 === 0 && someNumbers[index] % 5 ===0) {
      words.push('fizzBuzz');
    } else {
      words.push('bug!');
    }
  }
  return words;
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
