// Desafio 1
function compareTrue(boolean1, boolean2) {
  // seu código aqui
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  if (base < 0.0001 || height < 0.0001) {
    throw new Error('Insira números válidos, por favor');
  }
  return base * height / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
}

// Desafio 4
function concatName(arrayOfStrings) {
  // seu código aqui
  //variavel que vai receber o resultado final
  return `${arrayOfStrings[arrayOfStrings.length-1]}, ${arrayOfStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  return (wins * winPoints) + ties;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let decrescentNumbers = arrayNumbers.sort((a, b) => b - a)
  const highestNumber = decrescentNumbers[0];
  let onlyFirstNumbers = decrescentNumbers.reduce((arr, item) => {
    let array = arr;
    if (highestNumber === item) {
      array.push(item);
    }
    return array;
  }, []);

  return onlyFirstNumbers.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs((cat1 - mouse)) > Math.abs((cat2 - mouse))) return 'cat2';
  if (Math.abs((cat1 - mouse)) == Math.abs((cat2 - mouse))) return 'os gatos trombam e o rato foge';
  return 'cat1';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  //array que sera armazenada as strings
  return arrayNumbers.reduce((arr, item) => {
    let array = arr;
    if (item % 3 !== 0 && item % 5 !== 0) array.push('bug!');
    if (item % 3 === 0 && item % 5 !== 0) array.push('fizz');
    if (item % 3 !== 0 && item % 5 === 0) array.push('buzz');
    if (item % 3 === 0 && item % 5 === 0) array.push('fizzBuzz');
    return array;
  }, []);
}

// Desafio 9
function encode(string) {
  // seu código aqui
  return string.split('').reduce((newString, item) => {
    if (item === 'a') {
      newString += '1'
    } else if (item === 'e') {
      newString += '2'
    } else if (item === 'i') {
      newString += '3'
    } else if (item === 'o') {
      newString += '4'
    } else if (item === 'u') {
      newString += '5'
    } else if (item) {
      newString += item;
    }
    return newString;
  }, '');
}

function decode(string) {
  // seu código aqui
  return string.split('').reduce((newString, item) => {
    if (item === '1') {
      newString += 'a'
    } else if (item === '2') {
      newString += 'e'
    } else if (item === '3') {
      newString += 'i'
    } else if (item === '4') {
      newString += 'o'
    } else if (item === '5') {
      newString += 'u'
    } else if (item) {
      newString += item;
    }
    return newString;
  }, '');
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
