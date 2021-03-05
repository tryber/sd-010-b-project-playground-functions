// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(word) {
  let result = word.split(' ');
  return result;
}

// Desafio 4
function concatName(word) {
  return `${word[word.length - 1]}, ${word[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highNumber = 0; let count = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] >= highNumber) highNumber = numbers[i];
  }
  for (let j = 0; j < numbers.length; j += 1) {
    if (highNumber === numbers[j]) count += 1;
  } return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse); let dist2 = Math.abs(cat2 - mouse);
  if (dist1 === dist2) return 'os gatos trombam e o rato foge';
  else if (dist1 < dist2) return 'cat1';
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 15 === 0) result.push('fizzBuzz');
    else if (numbers[i] % 5 === 0) result.push('buzz');
    else if (numbers[i] % 3 === 0) result.push('fizz');
    else result.push('bug!');
  } return result;
}

// Desafio 9
function encode(word) {
  for (let i = 0; i < word.length; i += 1) {
    word = word.replace('a', 1)
      .replace('e', 2)
      .replace('i', 3)
      .replace('o', 4)
      .replace('u', 5);
  } return word;
}

function decode(word) {
  for (let i = 0; i < word.length; i += 1) {
    word = word.replace(1, 'a')
      .replace(2, 'e')
      .replace(3, 'i')
      .replace(4, 'o')
      .replace(5, 'u');
  } return word;
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
