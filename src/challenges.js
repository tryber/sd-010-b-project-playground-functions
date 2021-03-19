// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true;
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(string) {
  array = [];
  splittedString = '';
  for (let index in string) {
    if (string[index] == ' ') {
      array.push(splittedString);
      splittedString = ''
    } else {
      splittedString += string[index]
    }
  }
  array.push(splittedString);
  return array
}

// Desafio 4
function concatName(array) {
  firstName = '';
  lastName = '';
  for (let index in array) {
    if (index == 0) {
      lastName = array[index];
    } else if (index == array.length - 1) {
      firstName = array[index]
    }
  }
  let newName = `${firstName}, ${lastName}`;
  return newName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return (winsPoints + tiesPoints);
}

// Desafio 6
function highestCount(array) {
  let biggestNumber = 0;
  let bigNumberReps = 0;
  for (let index in array) {
    if (index == 0) {
      biggestNumber = array[index]
    } else if (biggestNumber < array[index]) {
      biggestNumber = array[index]
    }
  }
  for (let index in array) {
    if (array[index] == biggestNumber) {
      bigNumberReps += 1
    }
  }
  return bigNumberReps;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  posCounterCat1 = mouse - cat1;
  posCounterCat2 = mouse - cat2;
  counter1 = 0;
  counter2 = 0;

  if (posCounterCat1 < 0) {
    posCounterCat1 *= (-1)
  }

  if (posCounterCat2 < 0) {
    posCounterCat2 *= (-1)
  }

  for (let index = 0; index < posCounterCat1; index += 1) {
    counter1 += 1;
  }
  for (let index = 0; index < posCounterCat2; index += 1) {
    counter2 += 1;
  }

  let resultado = ''
  if (counter1 < counter2) {
    resultado = 'cat1'
    return resultado;
  } else if (counter2 < counter1) {
    resultado = 'cat2'
    return resultado;
  } else {
    resultado = "os gatos trombam e o rato foge"
    return resultado;
  }

}

// Desafio 8
function fizzBuzz(array) {
  resultArray = [];
  stringLoop = ''
  for (let index in array) {
    if (array[index] % 3 == 0) {
      stringLoop = "fizz";
    }
    if (array[index] % 5 == 0) {
      stringLoop = "buzz"
    }
    if (array[index] % 15 == 0) {
      stringLoop = "fizzBuzz"
    }
    if (array[index] % 3 != 0 && array[index] % 5 != 0) {
      stringLoop = "bug!"
    }
    resultArray.push(stringLoop)
  }
  return resultArray;
}

// Desafio 9
function encode(string) {
  newString = '';
  string = string.split('');
  for (let index in string) {
    if (string[index] == 'a') {
      string[index] = '1';
    } else if (string[index] == 'e') {
      string[index] = '2';
    } else if (string[index] == 'i') {
      string[index] = '3';
    } else if (string[index] == 'o') {
      string[index] = '4';
    } else if (string[index] == 'u') {
      string[index] = '5';
    }
    newString += string[index];
  }
  return newString;
}

function decode(string) {
  newString = '';
  string = string.split('');
  for (let index in string) {
    if (string[index] == '1') {
      string[index] = 'a';
    } else if (string[index] == '2') {
      string[index] = 'e';
    } else if (string[index] == '3') {
      string[index] = 'i';
    } else if (string[index] == '4') {
      string[index] = 'o';
    } else if (string[index] == '5') {
      string[index] = 'u';
    }
    newString += string[index];
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
