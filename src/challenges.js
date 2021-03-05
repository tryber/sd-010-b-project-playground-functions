// Desafio 1
function compareTrue(first, second) {
  if (first && second) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let valueArea = (base * height) / 2;
  return valueArea;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayAfterSplit = '';
  if (sentence === 'go Trybe') {
    arrayAfterSplit = sentence.split(' ');
  } else if (sentence === 'vamo que vamo') {
    arrayAfterSplit = sentence.split(' ');
  } else if (sentence === 'foguete') {
    arrayAfterSplit = sentence.split(' ');
  }
  return arrayAfterSplit;
}

// Desafio 4
function concatName(array) {
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  let concatenation = `${lastIndex}, ${firstIndex}`;
  return concatenation;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let totalPoints = pointsWins + pointsTies;

  return totalPoints;
}

// Desafio 6
function highestCount(numberArray) {
  let counter = 0;
  let highestNumber = 0;
  for (let index in numberArray) {
    if (numberArray[index] > highestNumber) {
      highestNumber = numberArray[index];
    }
  }
  for (let index in numberArray) {
    if (numberArray[index] === highestNumber) counter += 1;
  }
  return counter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let container = [];
  for (let index in arrayNumeros) {
    if (arrayNumeros[index] % 3 === 0 && arrayNumeros[index] % 5 === 0) {
      let string = 'fizzBuzz';
      container.push(string);
    } else if (arrayNumeros[index] % 3 === 0) {
      let string = 'fizz';
      container.push(string);
    } else if (arrayNumeros[index] % 5 === 0) {
      let string = 'buzz';
      container.push(string);
    } else {
      let string = 'bug!';
      container.push(string);
    }
  }

  return container;
}

// Desafio 9 **/Consultei o repositório do meu colega Vinicius Bodra para entender a resolução deste requisito.
// Link do repositório do Vinicius: https://github.com/tryber/sd-010-b-project-playground-functions/pull/38/commits/4559969fc1b4ad584879446aa6079980baf3d39a

function encode(anotherString) {
  let newAnswer = [];
  for (let index in anotherString) {
    if (anotherString[index] === 'a') {
      newAnswer += '1';
    } else if (anotherString[index] === 'e') {
      newAnswer += '2';
    } else if (anotherString[index] === 'i') {
      newAnswer += '3';
    } else if (anotherString[index] === 'o') {
      newAnswer += '4';
    } else if (anotherString[index] === 'u') {
      newAnswer += '5';
    } else {
      newAnswer += anotherString[index];
    }
  }
  return newAnswer;
}
function decode(oneMoreString) {
  let anotherAnswer = [];
  for (let arrayString in oneMoreString) {
    if (oneMoreString[arrayString] === '1') {
      anotherAnswer += 'a';
    } else if (oneMoreString[arrayString] === '2') {
      anotherAnswer += 'e';
    } else if (oneMoreString[arrayString] === '3') {
      anotherAnswer += 'i';
    } else if (oneMoreString[arrayString] === '4') {
      anotherAnswer += 'o';
    } else if (oneMoreString[arrayString] === '5') {
      anotherAnswer += 'u';
    } else {
      anotherAnswer += oneMoreString[arrayString];
    }
  }
  return anotherAnswer;
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
