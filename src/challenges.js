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
  let diffMouseCat1 = Math.abs(mouse - cat1);
  let diffMouseCat2 = Math.abs(mouse - cat2);
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
console.log(catAndMouse(10, 4, 22));
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
function encode(decodeMessage) {
  let arrMessage = decodeMessage.split('');
  for (let index = 0; index < arrMessage.length; index += 1) {
    switch (arrMessage[index].toLowerCase()) {
      case 'a':
        arrMessage[index] = 1;
        break;
      case 'e':
        arrMessage[index] = 2;
        break;
      case 'i':
        arrMessage[index] = 3;
        break;
      case 'o':
        arrMessage[index] = 4;
        break;
      case 'u':
        arrMessage[index] = 5;
        break;
      default:
        break;
    }
  }
  return arrMessage.join('');
}
function decode(encodeMessage) {
  let arrMessage = encodeMessage.split('');
  for (let index = 0; index < arrMessage.length; index += 1) {
    switch (arrMessage[index]) {
      case '1':
        arrMessage[index] = 'a';
        break;
      case '2':
        arrMessage[index] = 'e';
        break;
      case '3':
        arrMessage[index] = 'i';
        break;
      case '4':
        arrMessage[index] = 'o';
        break;
      case '5':
        arrMessage[index] = 'u';
        break;
      default:
        break;
    }
  }
  return arrMessage.join('');
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
