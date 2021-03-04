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
function fizzBuzz(numbers) {
  let fizzBuzzArray = [];
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9

// função troca caracter
function changeCharacters(code, initialMessage) { // funcao auxiliar para o desafio 9. esta funcao apenas substituí os caracteres.
  let finalMessage = '';
  let objectKeyArray = Object.keys(code);
  for (let index = 0; index < initialMessage.length; index += 1) {
    let counter = 0;
    let counter2 = 0;
    for (let key in code) {
      counter2 += 1;
      if (initialMessage[index] === key) {
        finalMessage += code[initialMessage[index]];
        counter += 1;
      } else if (counter2 === objectKeyArray.length && counter < 1) { // o counter2 garante que irá adicionar o caracter somente depois de verificado
        finalMessage += initialMessage[index]; // todos os itens do objeto
        counter += 1;
      }
    }
  }
  return finalMessage;
}

function encode(message) {
  let translation = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let codedMessagem = changeCharacters(translation, message);
  return codedMessagem;
}

function decode(message) {
  let translation = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedMessagem = changeCharacters(translation, message);
  return decodedMessagem;
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
