// Desafio 1
function compareTrue(check1, check2) {
  let check3 = false;
  if ((check1 === true) && (check2 === true)) {
    check3 = true;
  }
  return check3;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
let base = 51;
let height = 1;
console.log(calcArea(base, height));

// Desafio 3
function splitSentence(string) {
  let array = [];
  let help = '';
  for (let i = 0; i <= string.length; i += 1) {
    if (string[i] === ' ' || string[i] === undefined) {
      array.push(help);
      help = '';
    } else if (string[i] !== ' ') {
      help += string[i];
    }
  }
  return array;
}
console.log(splitSentence('Go trybe'));

// Desafio 4
function concatName(array) {
  let help;
  let first;
  let last;
  for (let i = 0; i < array.length; i += 1) {
    if (i === array.length - 1) {
      last = array[i];
    } else if (i === 0) {
      first = array[i];
    }
  }
  help = last + ', ' + first;
  return help;
}
console.log(concatName(['foquete', 'não', 'tem', 'ré']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let largerRepeat = 0;
  let cont = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] > array[j]) {
        if (largerRepeat < array[i]) {
            largerRepeat = array[i];
        }
      }        
    }
  }
  for (let i = 0; i < array.length; i += 1) {
    if (largerRepeat === array[i]) {
      cont += 1;
    }    
  }
  return cont;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  let string;
  if (distanceCat2 < distanceCat1) {
    string = 'cat2';
  } else if (distanceCat2 > distanceCat1) {
    string = 'cat1';
  } else {
    string = 'os gatos trombam e o rato foge';
  }
  return string;
}
console.log(catAndMouse(5, 2, 2));

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
