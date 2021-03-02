// Hello! Welcome to my playground!

// Challenge 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Challenge 2
function calcArea(base, height) {
  if (base === 0 || height === 0) return 'invalid base or heigth';
  return (base * height) / 2;
}

// Challenge 3
function splitSentence(string) {
  return string.split(' ');
}

// Challenge 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Challenge 5
function footballPoints(v, d) {
  return v * 3 + d;
}

// Challenge 6
function highestCount(arr) {
  if (!Array.isArray(arr)) return 'im a array';
  const sortedArray = arr.sort((a, b) => a - b);
  let highestRepeated = 0;
  for (let number of sortedArray) {
    if (number === sortedArray[sortedArray.length - 1]) {
      highestRepeated += 1;
    }
  }
  return highestRepeated;
}

// Challenge 7
function catAndMouse(mouse, cat1, cat2) {
  // Abs method found researching in w3 about Math methods in js
  const cat1Distance = Math.abs(cat1 - mouse);
  const cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Challenge 8
function fizzBuzz(arr) {
  return arr.map((number) => {
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

// Challenge 9
function encode(string) {
  const encodeMap = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let encodedString = '';
  for (let char of string) {
    if (encodeMap[char]) {
      encodedString += encodeMap[char];
    } else {
      encodedString += char;
    }
  }
  return encodedString;
}

function decode(string) {
  const encodeMap = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let decodedString = '';
  for (let char of string) {
    if (encodeMap[char]) {
      decodedString += encodeMap[char];
    } else {
      decodedString += char;
    }
  }
  return decodedString;
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
