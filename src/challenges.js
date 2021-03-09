// Desafio 1
function compareTrue(value1, value2) {
  let checker = false;
  if (value1 && value2) {
    checker = true;
  }
  return checker;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // Consultei o site da w3schools pra usar a função split aqui
  // link: https://www.w3schools.com/jsref/jsref_split.asp
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let concat = `${array[array.length - 1]}, ${array[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let arrayInOrder = array.sort();
  let greatestNumber = arrayInOrder[arrayInOrder.length - 1];
  let counter = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (greatestNumber === array[i]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1diff = Math.abs(mouse - cat1);
  let cat2diff = Math.abs(mouse - cat2);
  let catWinner = '';

  if (cat2diff < cat1diff) {
    catWinner = 'cat2';
  } else if (cat1diff < cat2diff) {
    catWinner = 'cat1';
  } else {
    catWinner = 'os gatos trombam e o rato foge';
  }
  return catWinner;
}

// Desafio 8
function check3(number) {
  let response = false;
  if (number % 3 === 0 && number % 5 !== 0) {
    response = true;
  }
  return response;
}
function check5(number) {
  let response = false;
  if (number % 5 === 0 && number % 3 !== 0) {
    response = true;
  }
  return response;
}
function check5and3(number) {
  let response = false;
  if (number % 5 === 0 && number % 3 === 0) {
    response = true;
  }
  return response;
}

function fizzBuzz(array) {
  let feedback = [];
  for (let i = 0; i < array.length; i += 1) {
    if (check3(array[i]) === true) {
      feedback.push('fizz');
    } else if (check5(array[i]) === true) {
      feedback.push('buzz');
    } else if (check5and3(array[i]) === true) {
      feedback.push('fizzBuzz');
    } else {
      feedback.push('bug!');
    }
  }
  return feedback;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
// Consultei o site da w3schools pra usar a função replace nas duas funções
// link: https://www.w3schools.com/jsref/jsref_replace.asp
function encode(string) {
  let encodedMessage = string;
  encodedMessage = encodedMessage.replace(/a/g, '1');
  encodedMessage = encodedMessage.replace(/e/g, '2');
  encodedMessage = encodedMessage.replace(/i/g, '3');
  encodedMessage = encodedMessage.replace(/o/g, '4');
  encodedMessage = encodedMessage.replace(/u/g, '5');

  return encodedMessage;
}

function decode(string) {
  let decodedMessage = string;

  decodedMessage = decodedMessage.replace(/1/g, 'a');
  decodedMessage = decodedMessage.replace(/2/g, 'e');
  decodedMessage = decodedMessage.replace(/3/g, 'i');
  decodedMessage = decodedMessage.replace(/4/g, 'o');
  decodedMessage = decodedMessage.replace(/5/g, 'u');

  return decodedMessage;
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
