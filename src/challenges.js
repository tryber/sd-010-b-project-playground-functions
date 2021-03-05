// Desafio 1
function compareTrue(value1, value2) {
  let result = null;
  if (value1 && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let splitedSentence = sentence.split(' ');
  return splitedSentence;
}
// Desafio 4
function concatName(arrayString) {
  let result = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let totalPoints = winsPoints + ties;
  return totalPoints;
}

// Desafio 6

// Função que verifica qual o maior número em um array
function checkHighestNumber(arrayNumbers) {
  let highestNumber = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > highestNumber) {
      highestNumber = arrayNumbers[index];
    }
  }
  return highestNumber;
}
// Função que verifica quantas vezes um número se repete em deterimnado array.
function checkRepetition(anyNumber, arrayNumbers) {
  let counter = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === anyNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Função que calcula a repetição do maior número
function highestCount(numbers) {
  let highestNumber = checkHighestNumber(numbers);
  let counter = 0;
  counter = checkRepetition(highestNumber, numbers);
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  let result = '';
  if (cat1Distance < cat2Distance) {
    result = 'cat1';
  } else if (cat2Distance < cat1Distance) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge'; // Jerry wins! :)
  }
  return result;
}
// Desafio 8

// nota do dev: este requisito tive que fritar os neurônios para conseguir refatorar e passaar no lint test D:

// Função auxilar 1 - Verifica se é divisível por 3.
function divisibleBy3(array, index) {
  if (array[index] % 3 === 0) {
    return 'fizz';
  }
  return 'bug!'; // se não for divisível nem por 5 nem por 3 retorna "bug!"
}
// Função auxilar 2 - Verifica se é divisível por 5.
function divisibleBy5(array, index) {
  if (array[index] % 5 === 0) {
    return 'buzz';
  }
  return divisibleBy3(array, index); // se não for divisível por 5 chama a função auxiliar 3 para verificar se é divisível por 3.
}

// Função auxilar 3 - Verifica se é divisível por 5 e 3.
function divisibleBy5And3(array, index) {
  if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
    return 'fizzBuzz';
  }
  return divisibleBy5(array, index); // se não for divisível por ambos chama a função auxiliar 2 para verificar se é divisível por 5.
}

// Função principal
function fizzBuzz(array) {
  let answer = [];
  for (let index = 0; index < array.length; index += 1) {
    answer.push(divisibleBy5And3(array, index));
  }
  return answer;
}

// Desafio 9

// Função auxiliar  - Verifica e subtitui o caracter informado.
function changeCharacter(character) {
  let outputCharacter = '';
  let objectList = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let key in objectList) {
    if (key === character) {
      outputCharacter = objectList[key];
      return outputCharacter;
    }
  }
  return character;
}

// Função
function encode(message) {
  let arrayMessage = message.split('');
  for (let index = 0; index < arrayMessage.length; index += 1) {
    arrayMessage[index] = changeCharacter(arrayMessage[index]);
  }
  return arrayMessage.join('');
}

// Função auxiliar  - Verifica e subtitui o caracter informado.
function changeCharacterReverse(character) {
  let outputCharacter = '';
  let objectList = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let key in objectList) {
    if (key === character) {
      outputCharacter = objectList[key];
      return outputCharacter;
    }
  }
  return character;
}

// Função Principal
function decode(message) {
  let arrayMessage = message.split('');
  for (let index = 0; index < arrayMessage.length; index += 1) {
    arrayMessage[index] = changeCharacterReverse(arrayMessage[index]);
  }
  return arrayMessage.join('');
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
