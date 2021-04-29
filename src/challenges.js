// Desafio 1
function compareTrue(num1, num2) {
  let valor = false;
  if (num1 === true && num2 === true) {
    valor = true;
  }
  return valor;
}

console.log(compareTrue(true, true));
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height) / 2;
  return triangulo;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  let word = '';
  for (let key in string) {
    if (string[key] !== ' ') {
      word += string[key];
    } else if (string[key] === ' ') {
      arrayString.push(word);
      word = '';
    }
  }
  arrayString.push(word);
  return arrayString;
}

console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = (wins * 3) + (ties * 1);
  return points;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let total = 0;
  let maior = 0;
  array.sort();
  // console.log(array.sort())
  for (let index = array.length - 1; index >= 0; index -= 1) {
    if (array[index] > maior || array[index] === maior) {
      maior = array[index];
      total += 1;
    }
  }
  return total;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resposta = '';
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    resposta = 'os gatos trombam e o rato foge';
  } else if ((cat1 - mouse) < (cat2 - mouse)) {
    resposta = 'cat1';
  } else if ((cat1 - mouse) > (cat2 - mouse)) {
    resposta = 'cat2';
  }
  return resposta;
}

console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(4, 2, 6));

// Desafio 8
function compareNumber(number) {
  if (number % 3 === 0) {
    number = 'fizz';
  } else if (number % 5 === 0) {
    number = 'buzz';
  } else {
    number = 'bug!';
  }
  return number;
}

function fizzBuzz(arrayNumber) {
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] % 3 === 0 && arrayNumber[index] % 5 === 0) {
      arrayNumber[index] = 'fizzBuzz';
    } else {
      arrayNumber[index] = compareNumber(arrayNumber[index]);
    }
  }
  return arrayNumber;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function compareString(string) {
  if (string === 'a') {
    string = 1;
  } else {
    string = 2;
  }
  return string;
}

function compareString2(string) {
  if (string === 'i') {
    string = 3;
  } else if (string === 'o') {
    string = 4;
  } else if (string === 'u') {
    string = 5;
  }
  return string;
}

function encode(phrase) {
  for (let index in phrase) {
    if (phrase[index] === 'a' || phrase[index] === 'e') {
      phrase = phrase.replace(phrase[index], compareString(phrase[index]));
    } else {
      phrase = phrase.replace(phrase[index], compareString2(phrase[index]));
    }
  }
  return phrase;
}

console.log(encode('hi, there!'));

function compareValor(string) {
  if (string === '1') {
    string = 'a';
  } else {
    string = 'e';
  }
  return string;
}

function compareValor2(string) {
  if (string === '3') {
    string = 'i';
  } else if (string === '4') {
    string = 'o';
  } else if (string === '5') {
    string = 'u';
  }
  return string;
}

function decode(phrase) {
  for (let index in phrase) {
    if (phrase[index] === '1' || phrase[index] === '2') {
      phrase = phrase.replace(phrase[index], compareValor(phrase[index]));
    } else {
      phrase = phrase.replace(phrase[index], compareValor2(phrase[index]));
    }
  }
  return phrase;
}

console.log(decode('h3 th2r2!'));

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
