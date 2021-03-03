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
      cat1Steps = mouse - cat1;
  }
  if (cat2 < mouse) {
      cat2Steps = mouse - cat2;
  }
  if (cat1 > mouse) {
      cat1Steps = cat1 - mouse;
  }
  if (cat2 > mouse) {
      cat2Steps = cat2 - mouse;
  }
  if (cat1Steps > cat2Steps) {
    return 'cat2';
  }
  if (cat2Steps > cat1Steps) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  fizzBuzzArray = [];
  for (let index in arrayNumber) {
    if (arrayNumber[index] % 3 == 0 && arrayNumber[index] % 5 == 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (arrayNumber[index] % 3 == 0 && arrayNumber[index] % 5 != 0) {
      fizzBuzzArray.push('fizz');
    } else if (arrayNumber[index] % 3 != 0 && arrayNumber[index] % 5 == 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(arrayString) {
  let newString = ''
  for(let index in arrayString){
    if(arrayString[index] == 'a'){
      newString = newString + '1';
    } else if(arrayString[index] == 'e'){
      newString = newString + '2';
    } else if(arrayString[index] == 'i'){
      newString = newString + '3';
    } else if(arrayString[index] == 'o'){
      newString = newString + '4';
    } else if(arrayString[index] == 'u'){
      newString = newString + '5';
    } else {
      newString = newString + arrayString[index];
    }
  }
  return newString;
}

function decode(arrayString) {
  let newString = ''
  for(let index in arrayString){
    if(arrayString[index] == '1'){
      newString = newString + 'a';
    } else if(arrayString[index] == '2'){
      newString = newString + 'e';
    } else if(arrayString[index] == '3'){
      newString = newString + 'i';
    } else if(arrayString[index] == '4'){
      newString = newString + 'o';
    } else if(arrayString[index] == '5'){
      newString = newString + 'u';
    } else {
      newString = newString + arrayString[index];
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
