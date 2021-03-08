// Desafio 1
function compareTrue(var1, var2) {
  let var3;
  if (var1 && var2) {
    var3 = true;
  } else {
    var3 = false;
  }
  return var3;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(text) {
  let word = [''];
  let wordCount = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] !== ' ') {
      word[wordCount] += text[i];
    } else {
      word.push('');
      wordCount += 1;
    }
  }
  return word;
}

// Desafio 4
function concatName(array) {
  let string = array[array.length - 1] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highest;
  let times;
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] > highest) || (highest == null)) {
      highest = array[i];
      times = 0;
    }
    if (array[i] == highest) {
      times += 1;
    }
  }
  return times;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  let result;
  if (dist1 < dist2) {
    result = 'cat1';
  }
  else if (dist2 < dist1) {
    result = 'cat2';
  }
  else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

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
