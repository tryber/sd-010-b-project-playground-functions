// Desafio 1
function compareTrue(bol1, bol2) {
  let trueFalse;
  if (bol1 === true && bol2 === true) {
    trueFalse = true;
  } else {
    trueFalse = false;
  }
  return trueFalse;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  let primeiroItem = array[0];
  let string = `${ultimoItem}, ${primeiroItem}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let repete = 0;
  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] > maior) {
      maior = index;
    }
    if (array[index] === maior) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
// Pesquisei o Math.abs no site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let string;
  if (distCat1 === distCat2) {
    string = 'os gatos trombam e o rato foge';
  } else if (distCat1 < distCat2) {
    string = 'cat1';
  } else {
    string = 'cat2';
  }
  return string;
}

// Desafio 8
function fizzBuzz(array) {
  let novaArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      novaArray.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      novaArray.push('fizz');
    } else if (array[i] % 5 === 0) {
      novaArray.push('buzz');
    } else {
      novaArray.push('bug!');
    }
  }
  return novaArray;
}

// Desafio 9
function encode(string) {
  let trocaCaracter = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      trocaCaracter += '1';
    } else if (string[i] === 'e') {
      trocaCaracter += '2';
    } else if (string[i] === 'i') {
      trocaCaracter += '3';
    } else if (string[i] === 'o') {
      trocaCaracter += '4';
    } else if (string[i] === 'u') {
      trocaCaracter += '5';
    } else {
      trocaCaracter += string[i];
    }
  }
  return trocaCaracter;
}
function decode(string) {
  let trocaCaracter = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1') {
      trocaCaracter += 'a';
    } else if (string[i] === '2') {
      trocaCaracter += 'e';
    } else if (string[i] === '3') {
      trocaCaracter += 'i';
    } else if (string[i] === '4') {
      trocaCaracter += 'o';
    } else if (string[i] === '5') {
      trocaCaracter += 'u';
    } else {
      trocaCaracter += string[i];
    }
  }
  return trocaCaracter;
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
