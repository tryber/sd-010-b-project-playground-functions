// Desafio 1
function compareTrue(v1, v2) {
  if (v1 && v2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  return str.split('');
}

// Desafio 4
function concatName(arr) {
  let tam = arr.length;
  let conc = arr[tam - 1] + ', ' + arr[0];
  return conc;
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = wins * 3 + ties;
  return total;
}

// Desafio 6
function highestCount(num) {
  let max = Math.max(...num);
  let vezes = 0;
  for (let key in num) {
    if (num[key] === max) {
      vezes = vezes + 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let ca1 = 'cat1';
  let ca2 = 'cat2';
  let emp = 'os gatos trombam e o rato foge';
  Math.abs(cat1);
  Math.abs(cat2);
  Math.abs(mouse);
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return ca1;
  }
  if ((cat2 - mouse) < (cat1 - mouse)) {
    return ca2;
  }
  if (cat1 === cat2) {
    return emp;
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let i in array) {
    if (array[i] % 3 === 0) {
      array[i] = 'fizz';
    } else if (array[i] % 5 === 0) {
      array[i] = 'buzz';
    } else if (array[num] % 3 === 0 && array[i] % 5 === 0) {
      array[i] = 'fizzBuzz';
    }
    else {
      array[i] = 'bug!';
    }
  }
  return array;
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
