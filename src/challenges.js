// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue && secondValue) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(array) {
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  let concat = `${lastIndex}, ${firstIndex}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  let result = wins + ties;
  return result;
}

// Desafio 6
function highestCount(numArray) {
  let objNum = {};
  for (let index = 0; index < numArray.length; index += 1) {
    if (objNum[numArray[index]] === undefined) {
      objNum[numArray[index]] = 1;
    } else {
      objNum[numArray[index]] += 1;
    }
  }
  let bigNum = Object.keys(objNum)[0];
  let sizeobjNum = Object.keys(objNum).length;
  let repeatedBigNum = 0;
  if (sizeobjNum !== 1) {
    for (let key in objNum) {
      if (bigNum < key) {
        repeatedBigNum = objNum[key];
      } else {
        repeatedBigNum = repeatedBigNum;
      }
    }
  } else {
    repeatedBigNum = repeatedNumbers[Object.keys(repeatedNumbers)[0]];
  }
  return repeatedBigNum;
}
//  REFERENCIA => Primeira parte do Gabarito do course da Trybe em exercício similar
//  REFERENCIA => https://pt.stackoverflow.com/questions/134393/como-obter-o-primeiro-item-de-um-objeto-em-javascript
//  REFERENCIA => https://pt.stackoverflow.com/questions/15058/como-saber-o-tamanho-quantidade-de-propriedades-atributos-de-um-objeto-em-ja

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
