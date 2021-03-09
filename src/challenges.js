// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(anyString) {
  let array = [];
  let word = '';
  for (let index = 0; index < anyString.length; index += 1) {
    if (anyString[index] === ' ') {
      array.push(word);
      word = '';
    } else if (index === (anyString.length - 1)) {
      word += anyString[index];
      array.push(word);
    } else {
      word += anyString[index];
    }
  }
  return array;
}

// Desafio 4
function concatName(arrayString) {
  let firstItem = arrayString[0];
  let lastItem = arrayString[arrayString.length - 1];
  let finalString = `${lastItem}, ${firstItem}`;
  return finalString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;

  return winPoints + tiePoints;
}

// Desafio 6
function highestNumber(arrayNumber) {
  let highestN = 0;
  for (let index in arrayNumber) {
    if (arrayNumber[index] > highestN) {
      highestN = arrayNumber[index];
    }
  }
  return highestN;
}

function highestCount(arrayNumber) {
  let quantityHighestNumber = 0;
  let highestN = highestNumber(arrayNumber);
  for (let index in arrayNumber) {
    if (highestN === arrayNumber[index]) {
      quantityHighestNumber += 1;
    }
  }
  return quantityHighestNumber;
}

highestCount([1,1,2,4,5,6,9,9,1])
// Desafio 7
function stepsCat1(mouse, cat1) {
  let cat1Steps = 0;
  if (cat1 < mouse) {
    cat1Steps = mouse - cat1;
  }
  if (cat1 > mouse) {
    cat1Steps = cat1 - mouse;
  }
  return cat1Steps;
}

function stepsCat2(mouse, cat2) {
  let cat2Steps = 0;
  if (cat2 < mouse) {
    cat2Steps = mouse - cat2;
  }
  if (cat2 > mouse) {
    cat2Steps = cat2 - mouse;
  }
  return cat2Steps;
}

function catAndMouse(mouse, cat1, cat2) {
  let cat1Steps = stepsCat1(mouse, cat1);
  let cat2Steps = stepsCat2(mouse, cat2);
  if (cat1Steps > cat2Steps) {
    return 'cat2';
  }
  if (cat2Steps > cat1Steps) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function verificationFizzBuzz(number) {
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

function fizzBuzz(arrayNumber) {
  let fizzBuzzArray = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    let number = arrayNumber[index];
    fizzBuzzArray.push(verificationFizzBuzz(number));
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let newString = '';
  for (let index in string) {
    if (string[index] === 'a') {
      newString += '1';
    } else if (string[index] === 'e') {
      newString += '2';
    } else if (string[index] === 'i') {
      newString += '3';
    } else if (string[index] === 'o') {
      newString += '4';
    } else if (string[index] === 'u') {
      newString += '5';
    } else {
      newString += string[index];
    }
  }
  return newString;
}

function decode(string) {
  let newString = '';
  for (let index in string) {
    if (string[index] === '1') {
      newString += 'a';
    } else if (string[index] === '2') {
      newString += 'e';
    } else if (string[index] === '3') {
      newString += 'i';
    } else if (string[index] === '4') {
      newString += 'o';
    } else if (string[index] === '5') {
      newString += 'u';
    } else {
      newString += string[index];
    }
  }
  return newString;
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
