/* eslint-disable complexity */
// Desafio 1
function compareTrue(boolValue1, boolvalue2) {
  return (boolValue1 && boolvalue2);
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return (area);
}

// Desafio 3
function splitSentence(phrase) {
  return (phrase.split(' '));
}

// Desafio 4
function concatName(stringArray) {
  stringArray = stringArray.join(' ');
  let splittedPhrase = stringArray.split(' ');
  let last = splittedPhrase[splittedPhrase.length - 1];
  let first = splittedPhrase[0];
  let lastAndFirst = `${last}, ${first}`;
  return (lastAndFirst);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function maxValue(numberArray) {
  let max = 0;
  for (let i in numberArray) {
    if (numberArray[i] > max) {
      max = numberArray[i];
    }
  }
  return max;
}

function highestCount(score) {
  let count = 0;
  for (let i in score) {
    if (score[i] === maxValue(score)) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist2 < dist1) {
    return 'cat2';
  }
  if (dist1 === dist2) {
    return ('os gatos trombam e o rato foge');
  }
}

// Desafio 8
function comparator(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numberArray) {
  let result = [];
  for (let i = 0; i < numberArray.length; i += 1) {
    result.push(comparator(numberArray[i]));
  }
  return result;
}

// // Desafio 9
function splitString(string) {
  return string.split('');
}
function changeVowel(vowel) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i += 1) {
    if (vowel === vowels[i]) {
      return (i + 1);
    }
  }
}
function changeNumber(number) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numberDecode = ['1', '2', '3', '4', '5'];
  for (let i = 0; i < numberDecode.length; i += 1) {
    if (number === numberDecode[i]) {
      return (vowels[i]);
    }
  }
}

function encode(string) {
  let splitedInput = splitString(string);
  const text = splitedInput.map((letter) => (
    (typeof changeVowel(letter) === 'number') ? changeVowel(letter) : letter
  ));
  return text.join('');
}

function decode(string) {
  let splitedInput = splitString(string);
  for (let index = 0; index < splitedInput.length; index += 1) {
    if (typeof changeNumber(splitedInput[index]) === 'string') {
      splitedInput[index] = changeNumber(splitedInput[index]);
    }
  }
  return splitedInput.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  changeVowel,
  changeNumber,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
