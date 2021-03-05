// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let calc = (base * height) / 2;
  return calc;
}
// console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(sentence) {
  let arr = sentence.split(' ');
  return arr;
}
// console.log(splitSentence("foquete"))

// Desafio 4
function concatName(arr) {
  let a = arr.shift();
  let b = arr.pop();
  let c = `${b}, ${a}`;
  return c;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let poitnVit = 3 * wins;
  let poitnTie = 1 * ties;
  let result = poitnVit + poitnTie;
  return result;
}
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arr) {
  let cont = 0;
  for (let index = 0; index < arr.length; index += 1) {
    let a = Math.max(...arr);
    if (a === arr[index]) {
      cont += 1;
    }
  }
  let result = cont;
  return result;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCatA = Math.abs(cat1 - mouse);
  let distanceCatB = Math.abs(cat2 - mouse);

  if (distanceCatB > distanceCatA) {
    return 'cat1';
  }
  if (distanceCatB < distanceCatA) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// console.log(catAndMouse(1, 6, 12))

// Desafio 8
function fizzBuzz(arr) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] % 3 === 0 && arr[index] % 5 === 0) {
      newArr.push('fizzBuzz');
    } else if (arr[index] % 3 === 0) {
      newArr.push('fizz');
    } else if (arr[index] % 5 === 0) {
      newArr.push('buzz');
    } else {
      newArr.push('bug!');
    }
  }
  return newArr;
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
// precisa de global regular expression

function encode(str) {
  return str.replace(/a/g, '1')
    .replace(/e/g, '2')
    .replace(/i/g, '3')
    .replace(/o/g, '4')
    .replace(/u/g, '5');
}

function decode(str) {
  return str.replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
}
// console.log(encode("Hi there"))
// console.log(decode("h3 th2r2!"))

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
