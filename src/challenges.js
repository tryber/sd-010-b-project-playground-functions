// Desafio 1
function compareTrue() {
  let result = Boolean;
  if ((value1 === true) && (value2 === true)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea() {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence() {
  let arrayDeStrings = [];
  arrayDeStrings = string.split(' ');
  return arrayDeStrings;
}

// Desafio 4
function concatName() {
  let ultimoItem = '';
  let primeiroItem = array[0];
  for (let i = 0; i < array.length; i += 1) {
    ultimoItem = array[i];
  }
  return `${ultimoItem}, ${primeiroItem}`;
}

// Desafio 5
function footballPoints() {
  let points = 0;
  points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount() {
  let biggest = arrayOfValues[0];
  let sum = 0;
  for (let i in arrayOfValues) {
    if (arrayOfValues[i] >= biggest) {
      biggest = arrayOfValues[i];
    }
  } for (let counter in arrayOfValues) {
    if (arrayOfValues[counter] === biggest) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse() {
  let lesserDistance = [];
  for (let index = 0; index < 3; index += 1) {
    if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
      lesserDistance = 'cat1';
    } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
      lesserDistance = 'cat2';
    } else {
      lesserDistance = 'os gatos trombam e o rato foge';
    }
  }
  return lesserDistance;
}

// Desafio 8
function fizzBuzz() {
  let result = [];
  for (let key in arrayOfNumbers) {
    if ((arrayOfNumbers[key] % 3 === 0) && (arrayOfNumbers[key] % 5 !== 0)) {
      result.push('fizz');
    } else if ((arrayOfNumbers[key] % 3 !== 0) && (arrayOfNumbers[key] % 5 === 0)) {
      result.push('buzz');
    } else if ((arrayOfNumbers[key] % 3 === 0) && (arrayOfNumbers[key] % 5 === 0)) {
      result.push('fizzBuzz');
    } else if ((arrayOfNumbers[key] % 3 !== 0) && (arrayOfNumbers[key] % 5 !== 0)) {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode() {
  let result = [];
  for (let key in string) {
    if (string[key] === 'a') {
      result += '1';
    } else if (string[key] === 'e') {
      result += '2';
    } else if (string[key] === 'i') {
      result += '3';
    } else if (string[key] === 'o') {
      result += '4';
    } else if (string[key] === 'u') {
      result += '5';
    } else {
      result += string[key];
    }
  }
  return result;
}
function decode() {
  let result = [];
  for (let key in stringWithNumbers) {
    if (stringWithNumbers[key] === '1') {
      result += 'a';
    } else if (stringWithNumbers[key] === '2') {
      result += 'e';
    } else if (stringWithNumbers[key] === '3') {
      result += 'i';
    } else if (stringWithNumbers[key] === '4') {
      result += 'o';
    } else if (stringWithNumbers[key] === '5') {
      result += 'u';
    } else {
      result += stringWithNumbers[key];
    }
  }
  return result;
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
