
function compareTrue(valueOne, valueTwo) {
  if (valueOne && valueTwo === true) return true;
  return false;
  }

  function calcArea(base, heigth) {
  let calculo = ((base * heigth) / 2);
  return calculo;
 }

// Desafio 3
function splitSentence(text) {
  let result = text.split(" ");
  return result 
}

// Desafio 4
function concatName(words) {
  return `${words[words.length - 1]}, ${words[0]}`;
}
// Desafio  
function footballPoints(wins, ties) {
  let totalPoints = ((wins * 3) + ties);
  return totalPoints;
}

// Desafio 6
function highestCount(arrayGrande) {
  let contador = arrayGrande.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let valueCat1 = Math.abs(cat1 - mouse);
  let valueCat2 = Math.abs(cat2 - mouse);
  if (valueCat1 > valueCat2) {
    return "cat2";
  } else if (valueCat2 > valueCat1) {
    return "cat1";
  }
  return "os gatos trombam e o rato foge";
}
console.log(catAndMouse(4, 7, 4));
// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let cont = 0; cont < array.length; cont ++) {
    if (array[cont] % 5 === 0 && array[cont] % 3 === 0) {
      result[cont] = "fizzBuzz";
    } else if (array[cont] % 5 === 0) {
      result[cont] = "buzz";
    } else if (array[cont] % 3 === 0) {
      result[cont] = "fizz";
    } else {
      result[cont] = "bug!";
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode(transLettersNumbers) {
  let number = '';
  for (let index = 0; index < transLettersNumbers.length; index += 1) {
    switch (transLettersNumbers[index]) {
      case 'a':
        number += 1;
        break;
      case 'e':
        number += 2;
        break;
      case 'i':
        number += 3;
        break;
      case 'o':
        number += 4;
        break;
      case 'u':
        number += 5;
        break;
      default:
        number += transLettersNumbers[index];
        break;
    }
  }
  return number;
}
function decode(transNumbersLetter) {
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
