// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }   
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceToSplit = sentence;
  let arraySentence = sentenceToSplit.split(' ');
  return arraySentence;
}

// Desafio 4
function concatName(sentence) {
  let firstWord = sentence[0];
  let lastWord = sentence[sentence.length - 1];
  return lastWord + ", " + firstWord;
  }

  // Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = 0;
  let count = 0;  
  for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] >= highestNumber) {       
      highestNumber = arrayNumbers[index];      
    }     
  }
  for (let index = 0; index < arrayNumbers.length; index++) {
    if (highestNumber === arrayNumbers[index]) {
      count++;
    }
  }
  return count;
}
console.log(highestCount([9, 1, 9, 2, 10, 12, 3, 9, 5, 7, 9, 9, 12]))

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
