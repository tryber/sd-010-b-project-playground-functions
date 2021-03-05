// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
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
function splitSentence(palavra) {
  let frase = (palavra).split(' ');
  return (frase);
}
// Desafio 4
function concatName(array) {
  return (`${array[array.length - 1]}, ${ array[0]}`);
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties * 1;
  return (points);
}
// Desafio 6
function highestCount(array) {
  let maior = 0;
  let count = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maior < array[index]) {
      maior = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (maior === array[index]) {
      count += 1;
    }
  }
  return count;
}
// Desafio 7
//console.log(catAndMouse(1,9,-12))
function catAndMouse(mouse, cat1, cat2) {

  let distcat1 = Math.abs((mouse - cat1));
  let distcat2 = Math.abs((mouse - cat2));
  if (distcat1 < distcat2) {
    return 'cat1';
  } else if (distcat2 < distcat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 === 0) && (array[index] % 5 != 0)) {
      arrayFizzBuzz.push('fizz');
    } else if ((array[index] % 5 === 0) && (array[index] % 3 != 0)) {
      arrayFizzBuzz.push('buzz');
    } else if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      arrayFizzBuzz.push('fizzBuzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }

  }
  return (arrayFizzBuzz);
}
// Desafio 9
//console.log(encode("hello"))
function encode(code) {

  let frase = '';
  let string = code.split('');
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case 'a':
      string[index] = '1';
      break;
    case 'e':
      string[index] = '2';
      break;
    case 'i':
      string[index] = '3';
      break;
    case 'o':
      string[index] = '4';
      break;
    case 'u':
      string[index] = '5';
      break;
    }
  }
  for (let index = 0; index < string.length; index += 1) {
    frase += `${string[index]}`;
  }
  return `${frase}`;
}

function decode(code) {
  let frase = '';
  let string = code.split('');
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
    case '1':
      string[index] = 'a';
      break;
    case '2':
      string[index] = 'e';
      break;
    case '3':
      string[index] = 'i';
      break;
    case '4':
      string[index] = 'o';
      break;
    case '5':
      string[index] = 'u';
      break;
    }
  }
  for (let index = 0; index < string.length; index += 1) {
    frase += `${string[index]}`;
  }
  return `${frase}`;
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
