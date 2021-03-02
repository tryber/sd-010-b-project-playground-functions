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
    } else if (index == (anyString.length - 1)) {
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
  let firstItem = '';
  let lastItem = '';
  for (let index in arrayString) {
    if (index == 0) {
      firstItem = arrayString[index];
    } else if (index == (arrayString.length - 1)) {
      lastItem = arrayString[index];
    }
  }
  finalString = `${lastItem}, ${firstItem}`;
  return finalString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;

  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(arrayNumber) {
  let highestNumber = 0;
  for (let index in arrayNumber) {
    if (arrayNumber[index] > highestNumber) {
      highestNumber = arrayNumber[index];
    }
  }
  let quantityHighestNumber = 0;
  for (let index in arrayNumber) {
    if (highestNumber == arrayNumber[index]) {
      quantityHighestNumber += 1;
    }
  }

  return quantityHighestNumber;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let cat1Steps = 0;
  let cat2Steps = 0;

  if (cat1 < mouse) {
    for (let index = 0; index < (mouse - cat1); index += 1) {
      cat1Steps += 1;
    }
  }
  if (cat2 < mouse) {
    for (let index = 0; index < (mouse - cat2); index += 1) {
      cat2Steps += 1;
    }
  }
  if (cat1 > mouse) {
    for (let index = 0; index < (cat1 - mouse); index += 1) {
      cat1Steps += 1;
    }
  }
  if (cat2 > mouse) {
    for (let index = 0; index < (cat2 - mouse); index += 1) {
      cat2Steps += 1;
    }
  }
  if (cat1Steps > cat2Steps) {
    return 'cat2';
  } if (cat2Steps > cat1Steps) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  fizzBuzzArray = [];
  for(let index in arrayNumber){
    if( arrayNumber[index] % 3 == 0 && arrayNumber[index] % 5 == 0){
      fizzBuzzArray.push('fizzBuzz');
    } else if(arrayNumber[index] % 3 == 00 && arrayNumber[index] % 5 != 0){
      fizzBuzzArray.push('fizz');
    } else if(arrayNumber[index] % 3 != 0 && arrayNumber[index] % 5 == 0){
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }  
  return fizzBuzzArray;
}
console.log(fizzBuzz([9, 25] ));
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
