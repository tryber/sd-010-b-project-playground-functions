// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return (array[array.length -1] + ', ' + array[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let highest = 0;
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] > array[index + 1]) {
      highest = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if(array[index] === highest) {
      count += 1;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat2 < distCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayFinal = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3) === 0 && (array[index] % 5) !== 0) {
      arrayFinal.push('fizz');
    } else if ((array[index] % 5) === 0 && (array[index] % 3) !== 0) {
      arrayFinal.push('buzz');
    } else if ((array[index] % 3 ) === 0 && (array[index] % 5) === 0) {
      arrayFinal.push('fizzBuzz');
    } else {
      arrayFinal.push('bug!');
    }
  }
  return arrayFinal;
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
