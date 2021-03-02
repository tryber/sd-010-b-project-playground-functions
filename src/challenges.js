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
