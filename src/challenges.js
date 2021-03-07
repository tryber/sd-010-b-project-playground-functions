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
  let words = [];
  for (let index = 0; index < someNumbers.length; index += 1) {
    if (someNumbers[index] % 3 === 0 && someNumbers[index] % 5 !== 0) {
      words.push('fizz');
    } else if (someNumbers[index] % 3 !== 0 && someNumbers[index] % 5 === 0) {
      words.push('buzz');
    } else if (someNumbers[index] % 3 === 0 && someNumbers[index] % 5 === 0) {
      words.push('fizzBuzz');
    } else {
      words.push('bug!');
    }
  }
  return words;
}

// Desafio 9
function encode(phrase) {
  // seu código aqui
  let decodedPhrase = phrase;
  for (let i = 0; i < decodedPhrase.length; i += 1) {
    decodedPhrase = decodedPhrase.replace('a', 1).replace('e', 2).replace('i', 3).replace('o', 4).replace('u', 5);
  }
  return decodedPhrase;
}
function decode(encPhrase) {
  // seu código aqui
  let encodedPhrase = encPhrase;
  for (let i = 0; i < encodedPhrase.length; i += 1) {
    encodedPhrase = encodedPhrase.replace(1, 'a').replace(2, 'e').replace(3, 'i').replace(4, 'o').replace(5, 'u');
  }
  return encodedPhrase;
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
