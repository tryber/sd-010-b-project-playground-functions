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

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

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

// Desafio 8
function fizzBuzz(fiz) {
  return fiz.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return 'fizzBuzz';
    }
    if (number % 3 === 0) {
      return 'fizz';
    }
    if (number % 5 === 0) {
      return 'buzz';
    }
    return 'bug!';
  });
}
// Desafio 9
function encode(string) {
  let encodeS = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encodedString = '';
  for (let index of string) {
    if (encodeS[index]) {
      encodedString += encodeS[index];
    } else {
      encodedString += index;
    }
  }
  return encodedString;
}
console.log(encode('hi there'));

function decode(string) {
  let encodeMap = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = '';
  for (let index of string) {
    if (encodeMap[index]) {
      decodedString += encodeMap[index];
    } else {
      decodedString += index;
    }
  }
  return decodedString;
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
