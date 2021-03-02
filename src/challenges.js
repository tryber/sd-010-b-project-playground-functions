// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
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
function concatName(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    return `${arr[arr.length - 1]}, ${arr[0]}`;
  }
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(arr) {
  let result = 0;
  let count = 0;

  for (let item of arr) {
    if (item > result) {
      result = item;
    }
  }
  for (let num of arr) {
    if (num === result) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arr) {
  let result = [];

  for (let i of arr) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('fizzBuzz');
    } else if (i % 5 === 0) {
      result.push('buzz');
    } else if (i % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(word) {
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let result = '';

  for (let letter of word) {
    if (vowels[letter]) {
      result += vowels[letter];
    } else {
      result += letter;
    }
  }
  return result;
}
function decode(word) {
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let result = '';

  for (let letter of word) {
    if (vowels[letter]) {
      result += vowels[letter];
    } else {
      result += letter;
    }
  }
  return result;
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
