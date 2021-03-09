// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(words) {
  let separeted = words.split(' ');
  return separeted;
}
console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(lastFirst) {
  return `${lastFirst[lastFirst.length - 1]}, ${lastFirst[0]}`;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6 - pensamento construido a partir da função math.max
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function highestCount(numbers) {
  let count = 0;
  let highest = Math.max(...numbers);

  for (let num of numbers) {
    if (num === highest) {
      count += 1;
    }
  }

  return count;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
// utilizei o Math.abs pra me retornar um valor absoluto.
function catAndMouse(mouse, cat1, cat2) {
  let haunt;
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance < cat2Distance) {
    haunt = 'cat1';
  } if (cat1Distance > cat2Distance) {
    haunt = 'cat2';
  } if (cat1Distance === cat2Distance || cat1 === cat2) {
    haunt = 'os gatos trombam e o rato foge';
  }
  return haunt;
}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 6, 6));

// Desafio 8
function fizzBuzz(numbersFB) {
  let resultFizzBuzz = [];
  for (let num of numbersFB) {
    if (num % 3 === 0 && num % 5 === 0) {
      resultFizzBuzz.push('fizzBuzz');
    } else if (num % 3 === 0) {
      resultFizzBuzz.push('fizz');
    } else if (num % 5 === 0) {
      resultFizzBuzz.push('buzz');
    } else {
      resultFizzBuzz.push('bug!');
    }
  }
  return resultFizzBuzz;
}  

console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
let codes = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function encode(phrase) {
  let newPhrase = [];
  for (let index of phrase) {
    newPhrase.push(index);
    }
  for (let key in codes) {
    for (let index2 = 0;index2 < newPhrase.length; index2 += 1) {
      if (key === newPhrase[index2]) {
        newPhrase[index2] = codes[key];
      }
    }
  }
  return newPhrase.join('');
}

function decode(phrase) {
  let newPhrase = [];
  for (let index of phrase) {
    newPhrase.push(index);
  }
  for (let [key, value] of Object.entries(codes)) {
    for (let index3 = 0; index3 < newPhrase.length; index3 += 1) {
      if (value == newPhrase[index3]) {
        newPhrase[index3] = key;
      }
    }
  }
  return newPhrase.join('');
}

console.log(encode('hi there!'));
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
