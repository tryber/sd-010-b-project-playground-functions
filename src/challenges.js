// Desafio 1
function compareTrue(booleanValue1, booleanValue2) {
  let booleanReturn;
  if (booleanValue1 && booleanValue2) booleanReturn = true;
  else booleanReturn = false;
  return booleanReturn;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  let splitStrings = str.split(' ');
  return splitStrings;
}

// Desafio 4
function concatName(arr) {
  const arrayStrings = arr;
  let returnString = `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
  return returnString;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(arrNumbers) {
  let maior = 0;
  let count = 0;
  for (const key in arrNumbers) {
    if (arrNumbers[maior] <= arrNumbers[key]) maior = arrNumbers[key];
  }
  for (const key in arrNumbers) {
    if (maior === arrNumbers[key]) count += 1;
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diffMouseCat1 = mouse - cat1;
  let diffMouseCat2 = mouse - cat2;
  let message;

  if (diffMouseCat1 > diffMouseCat2) {
    message = 'cat2';
  } else if (diffMouseCat2 > diffMouseCat1) {
    message = 'cat1';
  } else {
    message = 'os gatos trombam e o rato foge';
  }
  return message;
}

// Desafio 8
function fizzBuzz(arrNumbers) {
  let fizzBuzzBugArray = [];
  for (const key in arrNumbers) {
    if (arrNumbers[key] % 3 === 0 && arrNumbers[key] % 5 === 0) fizzBuzzBugArray.push('fizzBuzz');
    else if (arrNumbers[key] % 3 === 0) fizzBuzzBugArray.push('fizz');
    else if (arrNumbers[key] % 5 === 0) fizzBuzzBugArray.push('buzz');
    else fizzBuzzBugArray.push('bug!');
  }
  return fizzBuzzBugArray;
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
