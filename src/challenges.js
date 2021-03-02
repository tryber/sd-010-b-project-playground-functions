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
  for (index = lastName; index >= 0; index -= 1) {
    if (index === lastName) {
      arrayConcat.push(namesArray[index]);
    } else if (index === 0) {
      arrayConcat.push(namesArray[index]);
    }
  }
  return arrayConcat;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
