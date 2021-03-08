// Desafio 1
function compareTrue(firstValue, secondValue) {
  return (firstValue && secondValue);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
// I found the split() function at https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
// I found the concat() function at https://www.w3schools.com/jsref/jsref_concat_string.asp
function concatName(contact) {
  return contact[contact.length - 1].concat(', ', contact[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function getBigger(arrayNumbers) {
  let bigger = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] >= bigger) {
      bigger = arrayNumbers[i];
    }
  }
  return bigger;
}

function manyTimes(arrayNumbers) {
  let times = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (getBigger(arrayNumbers) === arrayNumbers[i]) {
      times += 1;
    }
  }
  return times;
}

function highestCount(arrayNumbers) {
  return manyTimes(arrayNumbers);
}

// Desafio 7
// For this challenge I took the Math.abs() function from https://www.w3schools.com/jsref/jsref_abs.asp
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance;
  let cat2Distance;
  let winnerCat;

  cat1Distance = cat1 - mouse;
  cat2Distance = cat2 - mouse;

  if (Math.abs(cat1Distance) < Math.abs(cat2Distance)) {
    winnerCat = 'cat1';
  } else if (Math.abs(cat2Distance) < Math.abs(cat1Distance)) {
    winnerCat = 'cat2';
  } else {
    winnerCat = 'os gatos trombam e o rato foge';
  }
  return winnerCat;
}

// Desafio 8
function mod3(number) {
  if ((number % 3) === 0) {
    return true;
  }
}

function mod5(number) {
  if ((number % 5) === 0) {
    return true;
  }
}

function verifyEachN(number) {
  if (mod3(number) && mod5(number)) {
    number = 'fizzBuzz';
  } else if (mod3(number)) {
    number = 'fizz';
  } else if (mod5(number)) {
    number = 'buzz';
  } else {
    number = 'bug!';
  }
  return number;
}

function fizzBuzz(numbers) {
  for (let i = 0; i < numbers.length; i += 1) {
    numbers[i] = verifyEachN(numbers[i]);
  }
  return numbers;
}

// Desafio 9
// I found the replace() function at https://www.w3schools.com/jsref/jsref_replace.asp
function encode(string) {
  string = string.replace(/a/g, 1);
  string = string.replace(/e/g, 2);
  string = string.replace(/i/g, 3);
  string = string.replace(/o/g, 4);
  string = string.replace(/u/g, 5);
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a');
  string = string.replace(/2/g, 'e');
  string = string.replace(/3/g, 'i');
  string = string.replace(/4/g, 'o');
  string = string.replace(/5/g, 'u');
  return string;
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
