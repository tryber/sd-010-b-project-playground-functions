// Desafio 1
function compareTrue(valor1, valor2) {
  const bool = valor1 && valor2;

  return bool;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;

  return area;
}

// Desafio 3
// Jeito 1:
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');

  return arrayOfStrings;
}

// Jeito 2:
/* function splitSentence(string) {
  let arrayOfStrings = [];
  let word = '';

  for (let index in string) {
    if (string[index] === ' ') {
      arrayOfStrings.push(word);
      word = '';
    } else {
      word += string[index];
    }
  }
  arrayOfStrings.push(word);

  return arrayOfStrings;
} */

// Desafio 4
function concatName(array) {
  const concatenated = `${array[(array.length - 1)]}, ${array[0]}`;

  return concatenated;
}

// Desafio 5
function footballPoints(wins, ties) {
  const totalPoints = (wins * 3) + ties;

  return totalPoints;
}

// Desafio 6
// Jeito 1:
function highestCount(arrayOfNum) {
  //  Procura o maior valor
  let highestNum = arrayOfNum.reduce((num1, num2) => Math.max(num1, num2));

  //  Filtra os valores que são iguais ao maior valor
  let count = arrayOfNum.filter((value) => value === highestNum);

  //  Retorna o tamanho do array do count
  return count.length;
}

// Jeito 2:
/* function highestCount(arrayOfNum) {
  let highestNumber = 0;
  let counter = 0;
  for (let number in arrayOfNum) {
    if (arrayOfNum[number] > highestNumber) {
      highestNumber = arrayOfNum[number];
    }
  }

  for (let number in arrayOfNum) {
    if (highestNumber == arrayOfNum[number]) {
      counter += 1;
    }
  }

  return counter;
} */

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
