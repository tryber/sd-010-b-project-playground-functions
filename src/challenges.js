// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(arra) {
  let string = arra[arra.length - 1] + ', ' + arra[0]; 
  return string;  
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(maxN) {
  let numb = 0;
  for (const i of maxN) {
    if (Math.max.apply(null, maxN) === i) {
      numb += 1;
    }
  }
  return numb;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) !== Math.abs(mouse - cat2)) {
    if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
      return 'cat1';
    }
    return 'cat2';
  }
  return ('os gatos trombam e o rato foge');
}
console.log(catAndMouse(2, 0, 3));
console.log(catAndMouse(0, 6, 1));
console.log(catAndMouse(0, 0, 0));
// https://www.w3schools.com/js/js_math.asp

// Desafio 8
function fizzBuzz(fiz) {
  let result = [];
  for (let index = 0; index < fiz.length; index += 1) {
    if (fiz[index] % 3 === 0 && fiz[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (fiz[index] % 3 === 0) {
      result.push('fizz');
    } else if (fiz[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(arrayString) {
  let string = arrayString;
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < string.length; index += 1) {
    for (let cont = 0; cont < vogais.length; cont += 1) {
      if (string[index] === vogais[cont]) {
        string = string.replace(string[index], (cont + 1));
      }
    }
  }
  return string;
}
console.log(encode('hi there!'));

function decode(decodeArray) {
  let string = decodeArray;
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < string.length; index += 1) {
    for (let cont = 0; cont < vogais.length; cont += 1) {
      if (string[index] == (cont+1)) {
        string = string.replace(string[index], vogais[cont]);
      }
    }
  }
  return string;
}
console.log(decode('h3 th2r2!'));

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
