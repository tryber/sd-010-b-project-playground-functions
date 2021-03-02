// Desafio 1
function compareTrue(a, b) {
  let boolean1 = a;
  let boolean2 = b;
  let result = false;
  if (boolean1 === true && boolean2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let b = base;
  let h = height;
  let area = (b * h) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let s = `${string} `;
  let split = '';
  let resultArray = [];

  for (let index = 0; index < s.length; index += 1) {
    if (s[index] !== ' ') {
      split += s[index];
    } else {
      resultArray.push(split);
      split = '';
    }
  }
  return resultArray;

// Referencia:dev.to/imakki/how-to-split-string-without-using-js-s-inbuilt-spit-function-261b
}

// Desafio 4
function concatName(array) {
  let a = array;
  let tempString = '';
  tempString = `${a[a.length - 1]}, ${a[0]}`;
  return tempString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(listOfNum) {
  let hNumber = 0;
  let repeatCount = 0;
  for (let i = 0; i < listOfNum.length; i += 1) {
    if (listOfNum[i] > hNumber) {
      hNumber = listOfNum[i];
    }
  }
  for (let j = 0; j < listOfNum.length; j += 1) {
    if (listOfNum[j] === hNumber) {
      repeatCount += 1;
    }
  }
  return repeatCount;
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
