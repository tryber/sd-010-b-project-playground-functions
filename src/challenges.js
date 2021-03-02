// Desafio 1
function compareTrue(x, y) {
  let isTrue = false;

  if (x === true && y === true) {
    isTrue = true;
  }

  return isTrue;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties));
}

// Desafio 6
function highestCount(array) {
  let comparison = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (comparison < array[i]) {
      comparison = array[i];
    }
  }

  let count = 0;

  for (let j = 0; j < array.length; j += 1) {
    if (array[j] === comparison) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let response = '';

  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    response = 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    response = 'cat2';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    response = 'cat1';
  }

  return response;
}

// Desafio 8
function fizzBuzz(array) {
  let transformed = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      transformed.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      transformed.push('fizz');
    } else if (array[i] % 5 === 0) {
      transformed.push('buzz');
    } else {
      transformed.push('bug!');
    }
  }

  return transformed;
}

// Desafio 9
function encode(str) {
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let arr = str.split('');

  for (let i = 0; i < arr.length; i += 1) {
    for (let key in code) {
      if (arr[i] === code[key]) {
        arr[i] = key;
      }
    }
  }

  return arr.join('');
}

function decode(str) {
  let code = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let arr = str.split('');

  for (let i = 0; i < arr.length; i += 1) {
    for (let key in code) {
      if (arr[i] === key) {
        arr[i] = code[key];
      }
    }
  }

  return arr.join('');
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
