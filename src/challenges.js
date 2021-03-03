/* eslint-disable no-continue */
// Desafio 1
function compareTrue(firstValue, secondValue) {
  // seu código aqui
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let letter = ' '; let word = '';
  let result = [];
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === letter) {
      result.push(word);
      word = '';
      continue;
    }
    word += phrase[index];
    if (index >= phrase.length) {
      result.push(word);
    }
  } result.push(word);
  return result;
}

// Desafio 4
function concatName(Array = []) {
  // seu código aqui
  let endArray = '';
  let result = '';
  for (let index = 0; index < Array.length; index += 1) {
    if (index === Array.length - 1) {
      endArray = Array[index];
    }
  }
  result = `${endArray},${Array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let ptsWins = 0;
  let result = 0;
  ptsWins = wins * 3;
  result = ptsWins + ties;
  return result;
}

// Desafio 6
function highestCount(numeros = []) {
  // seu código aqui
  let maior = numeros[0];
  let result = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maior) {
      maior = numeros[index];
      break;
    }
    if (numeros[index] === maior) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let alcanceCat1Mouse = cat1 - mouse;
  let alcanceCat2Mouse = cat2 - mouse;
  if (alcanceCat1Mouse < alcanceCat2Mouse) {
    let result = 'cat1';
    return result;
  } if (cat1 === cat2) {
    let result = 'os gatos trombam e o rato foge';
    return result;
  }
  let result = 'cat2';
  return result;
}

// Desafio 8
function fizzBuzz(Array = []) {
  // seu código aqui
  let result = [];
  for (let index = 0; index < Array.length; index += 1) {
    if (Array[index] % 3 === 0 && Array[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (Array[index] % 5 === 0 && Array[index] % 3 === 1) {
      result.push('buzz');
    } else if (Array[index] % 3 === 0 && Array[index] % 5 === 1 || Array[index] % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  } return result;
}

// Desafio 9
function encode(teste) {
  // seu código aqui
  let result = '';
  for (let index = 0; index < teste.length; index += 1) {
    if (teste[index] === 'a') {
      result += '1';
      continue;
    } if (teste[index] === 'e') {
      result += '2';
      continue;
    } if (teste[index] === 'i') {
      result += '3';
      continue;
    } if (teste[index] === 'o') {
      result += '4';
      continue;
    } if (teste[index] === 'u') {
      result += '5';
      continue;
    } result += teste[index];
  } return result;
}// console.log(encode("hi there!"));

function decode(teste) {
  // seu código aqui
  let result = '';
  for (let index2 = 0; index2 < teste.length; index2 += 1) {
    if (teste[index2] == '1') {
      result += 'a';
      continue;
    } if (teste[index2] == '2') {
      result += 'e';
      continue;
    } if (teste[index2] == '3') {
      result += 'i';
      continue;
    } if (teste[index2] == '4') {
      result += 'o';
      continue;
    } if (teste[index2] == '5') {
      result += 'u';
      continue;
    } result += teste[index2];
  } return result;
}// console.log(decode("h3 th2r2!"));

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
