// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let response = [];
  for (let index = (array.length - 1); index >= 0; index -= 1) {
    if ((index === 0) || (index === (array.length - 1))) {
      response.push(array[index]);
    }
  }
  return response.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (3 * wins) + (1 * ties);
  return points;
}

// Desafio 6
function highestCount(array) {
  let biggest = array[0];
  let count = 0;
  for (let index in array) {
    if (array[index] === biggest) {
      count += 1;
    } else if (array[index] > biggest) {
      biggest = array[index];
      count = 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// auxiliary functions Desafio 8
function divisibleByThree(number) {
  if (number % 3 === 0) {
    return 'fizz';
  }
  return false;
}

function divisibleByFive(number) {
  if (number % 5 === 0) {
    return 'buzz';
  }
  return false;
}

function divisibleByThreeAndFive(number) {
  if ((number % 3 === 0) && (number % 5 === 0)) {
    return 'fizzBuzz';
  }
}
// Desafio 8
function fizzBuzz(array) {
  let output = [];
  for (let index = 0; index < array.length; index += 1) {
    if (divisibleByThreeAndFive(array[index])) {
      output.push(divisibleByThreeAndFive(array[index]));
    } else if (divisibleByThree(array[index])) {
      output.push(divisibleByThree(array[index]));
    } else if (divisibleByFive(array[index])) {
      output.push(divisibleByFive(array[index]));
    } else {
      output.push('bug!');
    }
  }
  return output;
  // seu código aqui
}
function findVowel(char) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < vowels.length; index += 1) {
    if (char === vowels[index]) {
      return index + 1;
    }
  }
}
// Desafio 9
function encode(string) {
  let answer = '';
  for (let letter in string) {
    if (findVowel(string[letter])) {
      answer += findVowel(string[letter]);
    } else {
      answer += (string[letter]);
    }
  }
  return answer;
}
console.log(encode('hi there!'));

function decode(string) {
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
