// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(breakString) {
  return breakString.split(" ");
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length - 1] + ", " + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maxNumber = 0;
  let maxNumberRepeat = 0;

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > maxNumber) {
      maxNumber = arrayNumbers[i];
    }
  }

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] === maxNumber) {
      maxNumberRepeat++;
    }
  }

  return maxNumberRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diffCat1 = Math.abs(cat1 - mouse);
  let diffCat2 = Math.abs(cat2 - mouse);

  if (diffCat1 < diffCat2) {
    return "cat1";
  }
  else if (diffCat1 > diffCat2) {
    return "cat2";
  }
  else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {

  let returnArray = []

  /* Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
  Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
  Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
  Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
  Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]
   */

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
      returnArray.push("fizzBuzz");
    }
    else if (arrayNumbers[i] % 3 === 0) {
      returnArray.push("fizz");
    }
    else if (arrayNumbers[i] % 5 === 0) {
      returnArray.push("buzz");
    }
    else {
      returnArray.push("bug!");
    }
  }
  return returnArray;
}

// Desafio 9
function encode(inputText) {
  return inputText.replace(/a/g, "1").replace(/e/g, "2").replace(/i/g, "3").replace(/o/g, "4").replace(/u/g, "5");
}

function decode(inputText) {
  return inputText.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/g, "u");
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
