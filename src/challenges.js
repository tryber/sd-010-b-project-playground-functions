// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumber) {
  let sortReverse = arrayNumber.sort().reverse();
  let highestNumber = 0;
  let displayHighestNumber = 0;
  for (index = 0; index < arrayNumber.length; index += 1) {
    if (highestNumber <= sortReverse[index]) {
      highestNumber = sortReverse[index];
      displayHighestNumber += 1;
    }
  }
  return displayHighestNumber;
}
console.log(highestCount([09,10,11,12]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance == cat2Distance) {
    return 'os gatos trombam e o rato foge';
  } else if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let array = [];
  for (index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] % 3 == 0 && arrayNumber[index] % 5 == 0) {
      array[index] = 'fizzBuzz';
    } else if (arrayNumber[index] % 3 == 0) {
      array[index] = 'fizz';
    } else if (arrayNumber[index] % 5 == 0) {
      array[index] = 'buzz';
    } else {
      array[index] = 'bug!';
    }
  }
  return array;
}

// Desafio 9
function encode(string) {
  let encoded = '';
  for (index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      encoded += 1;
    } else if (string[index] === 'e') {
      encoded += 2;
    } else if (string[index] === 'i') {
      encoded += 3;
    } else if (string[index] === 'o') {
      encoded += 4;
    } else if (string[index] === 'u') {
      encoded += 5;
    } else {
      encoded += string[index];
    }
  }
  return encoded;
}

function decode(string) {
  let decoded = '';
  for (index = 0; index < string.length; index += 1) {
    if (string[index] == 1) {
      decoded += 'a';
    } else if (string[index] == 2) {
      decoded += 'e';
    } else if (string[index] == 3) {
      decoded += 'i';
    } else if (string[index] == 4) {
      decoded += 'o';
    } else if (string[index] == 5) {
      decoded += 'u';
    } else {
      decoded += string[index];
    }
  }
  return decoded;
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
