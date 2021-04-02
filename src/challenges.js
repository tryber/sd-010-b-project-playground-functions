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
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(arrNumbers) {
  const maxNumber = Math.max(...arrNumbers);
  const maxNumberArr = arrNumbers.filter((number) => number === maxNumber);
  return maxNumberArr.length;
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

// Desafio 8
function fizzBuzz(arrNumbers) {
  const fizzBuzzBugArr = arrNumbers.reduce((arr, number) => {
    let message;
    if (number % 3 === 0 && number % 5 === 0) message = 'fizzBuzz';
    else if (number % 3 === 0) message = 'fizz';
    else if (number % 5 === 0) message = 'buzz';
    else message = 'bug!';
    return arr.concat(message);
  }, []);
  return fizzBuzzBugArr;
}

// Desafio 9
//tentar fazer com objetos
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
