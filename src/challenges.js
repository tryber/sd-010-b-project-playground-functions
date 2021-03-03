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


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  
  if (distanceCat1 > distanceCat2) 
  return 'cat2';
  if (distanceCat2 > distanceCat1)
  return 'cat1';
  if (distanceCat1 === distanceCat2)
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let resposta = [];
  for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      resposta.push('fizzBuzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      resposta.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0) {
      resposta.push('buzz');
    } else {
      resposta.push('bug!'); 
    }
  }
  return resposta;
}

console.log(fizzBuzz([9,25]));

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
