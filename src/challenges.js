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
// REFERÊNCIA: https://developer.mozilla.org/
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
function fizzBuzz(array) {
  let string = [];
  for (let index = 0; index <= array.length - 1; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      string.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      string.push('fizz');
    } else if (array[index] % 5 === 0) {
      string.push('buzz');
    } else {
      string.push('bug!');
    }
  }
  return string;
}

// Desafio 9
function encode(string) {
  let numero = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let newString = '';
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        newString += 1;
        break;
      case 'e':
        newString += 2;
        break;
      case 'i':
        newString += 3;
        break;
      case 'o':
        newString += 4;
        break;
      case 'u':
        newString += 5;
        break;
      default:
        newString += string[index];
    }
  }
  console.log(newString);
}
encode('hello');

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
