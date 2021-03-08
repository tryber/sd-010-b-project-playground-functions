// Desafio 1
function compareTrue(n1, n2) {
  return n1 && n2;
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
  let newArray = `${array[array.length - 1]}, ${array[0]}`;
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
  // Referência: https://pt.stackoverflow.com/
  let maior = Math.max.apply(null, array);
  let cont = 0;
  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
// REFERÊNCIAS: https://developer.mozilla.org/
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(cat1 - mouse);
  cat2 = Math.abs(cat2 - mouse);

  if (cat1 < cat2) {
    return 'cat1';
  }
  if (cat2 < cat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
let check = (number) => {
  if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return 'fizz';
};
function fizzBuzz(number) {
  let newArray = [];
  for (let index of number) {
    newArray.push(check(index));
  }
  return newArray;
}

// REFERÊNCIAS: https://stackoverflow.com/ , https://developer.mozilla.org/  , CANAL YOUTUBE: Programador a Bordo, Playlist 'JavaScript: Funções de Array'
// Desafio 9
function encode(string) {
  let obj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let key of string) {
    if (obj[key]) string = string.replace(key, obj[key]);
  }
  return string;
}

function decode(string) {
  let obj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let key of string) {
    if (obj[key]) string = string.replace(key, obj[key]);
  }
  return string;
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
