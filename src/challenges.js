// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height / 2);
  return result;
}

// Desafio 3
function splitSentence(palavra) {
  let separacao = palavra.split(' ');
  return separacao;
}

// Desafio 4
function concatName(name) {
  let last = name[name.length - 1];
  let first = name[0];
  let concatenation = `${last}, ${first}`;

  return concatenation;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  let parcialWinPoints = winPoints * wins;
  let parcialTiePoints = tiePoints * ties;
  let totalPoints = parcialWinPoints + parcialTiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let count = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > maior) {
      maior = numbers[index];
    }
  }
  for (let increment = 0; increment < numbers.length; increment++) {
    if (numbers[increment] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse-cat2);
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat2 > distanceCat1) {
    return 'cat1';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arr = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 != 0) {
      arr.push('fizz');
    } else if (array[index] % 3 != 0 && array[index] % 5 === 0) {
      arr.push('buzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arr.push('fizzBuzz');
    } else if (array[index] % 3 != 0 && array[index] % 5 != 0) {
      arr.push('bug!');
    }
  }
  return arr;
}

// Desafio 9

function encode(lowercase) {
  let encode = lowercase
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
  return encode;
}

function decode(text) {
  let decode = text
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return decode;
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
