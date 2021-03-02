// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let response = [];
  for (let index = (array.length - 1); index >= 0; index -= 1) {
    if ((index === 0) || (index === (array.length - 1))) {
      response.push(array[index]);
    }
  }
  return response.join(' ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + (1 * ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  let biggest = array[0];
  let count = 0;
  for (let index in array) {
    if (array[index] === biggest) {
      count += 1;
    } else if (array[index] > biggest) {
      biggest = array[index];
      count = 1;
    }
  }
  return count;
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
