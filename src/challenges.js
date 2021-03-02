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
  return response.join(', ');
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
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = cat1 - mouse;
  let distanceCat2 = cat2 - mouse;
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat2 < distanceCat1) {
    return 'cat 2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let response = [];
  for (let index in array) {
    if (((array[index] % 3) === 0) && ((array[index] % 5) === 0)) {
      response.push('fizzBuzz');
    }
    else if ((array[index] % 3) === 0) {
      response.push('fizz');
    }
    else if ((array[index] % 5) === 0){
      response.push('buzz')
    }

  }
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
