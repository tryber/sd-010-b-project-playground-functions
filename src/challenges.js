// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else if (a === false && b === false) {
    return false;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let phraseArray = [];
  let currentWord = "";
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] != " ") {
      currentWord = currentWord + phrase[index];
    } else {
      phraseArray.push(currentWord);
      currentWord = "";
    }
  }
  phraseArray.push(currentWord);
  return phraseArray;
}

// Desafio 4
function concatName(namesArray) {
  let arrayConcat = [];
  let lastName = namesArray.length - 1;
  let names = "";
  for (index = lastName; index >= 0; index -= 1) {
    if (index === lastName) {
      arrayConcat.push(namesArray[index]);
    } else if (index === 0) {
      arrayConcat.push(namesArray[index]);
    }
  }
  names = arrayConcat[0] + ", " + arrayConcat[1];
  return names;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(valuesArray) {
  let biggestNumber = valuesArray[0];
  let subCounter = 0;
  let currentCounter = 0;
  for (index = 0; index < valuesArray.length; index += 1) {
    for (counterIndex = 0; counterIndex < valuesArray.length; counterIndex += 1) {
      if (valuesArray[counterIndex] === valuesArray[index]) {
        currentCounter += 1;
      }
    }
    if (valuesArray[index] >= biggestNumber) {
      biggestNumber = valuesArray[index];
      subCounter = currentCounter;
      currentCounter = 0;
    } else {
      currentCounter = 0;
    }
  }
  return subCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1distance = cat1 - mouse;
  let cat2distance = cat2 - mouse;
  if (cat1distance < cat2distance) {
    return "cat1";
  } else if (cat1distance > cat2distance) {
    return "cat2";
  } else if (cat1distance = cat2distance) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
