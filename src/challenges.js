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
  let string = (ultimoItem + ', ' + primeiroItem);
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
function catAndMouse(cat1, cat2, mouse) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;
  if (distCat1 === distCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distCat1 < distCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
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
