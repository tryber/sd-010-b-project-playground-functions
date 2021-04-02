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
// tentar fazer com objetos
function encode(decodeMessage) {
  const vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  const decodeMessageChars = decodeMessage.toLowerCase().split('');
  const encodeMessageChars = decodeMessageChars.map((char) => {
    if (Object.prototype.hasOwnProperty.call(vowels, char)) {
      char = vowels[char];
    }
    return char;
  });
  return encodeMessageChars.join('');
}

function decode(encodeMessage) {
  const numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  const encodeMessageChars = encodeMessage.toLowerCase().split('');
  const decodeMessageChars = encodeMessageChars.map((char) => {
    if (Object.prototype.hasOwnProperty.call(numbers, char)) {
      char = numbers[char];
    }
    return char;
  });
  return decodeMessageChars.join('');
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
