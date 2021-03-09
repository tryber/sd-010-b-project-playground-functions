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
  let words = [''];
  let wordCount = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] !== ' ') {
      words[wordCount] += text[i];
    } else {
      words.push('');
      wordCount += 1;
    }
  }
  return words;
}

// Desafio 4
function concatName(array) {
  let string = array[array.length - 1] + ', ' + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  let times = 1;
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > highest) {
      highest = array[i];
      times = 0;
    }
    if (array[i] === highest) {
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
  } else if (dist2 < dist1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let strings = [''];
  for (let i = 0; i < array.length; i += 1) {
    if (((array[i] % 3) === 0) && ((array[i] % 5) === 0)) {
      strings[i] = 'fizzBuzz';
    } else if ((array[i] % 3) === 0) {
      strings[i] = 'fizz';
    } else if ((array[i] % 5) === 0) {
      strings[i] = 'buzz';
    } else {
      strings[i] = 'bug!';
    }
  }
  return strings;
}

// Desafio 9
function encode(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case 'a':
        newString += '1';
        break;
      case 'e':
        newString += '2';
        break;
      case 'i':
        newString += '3';
        break;
      case 'o':
        newString += '4';
        break;
      case 'u':
        newString += '5';
        break;
      default:
        newString += string[i];
    }
  }
  return newString;
}
function decode(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case '1':
        newString += 'a';
        break;
      case '2':
        newString += 'e';
        break;
      case '3':
        newString += 'i';
        break;
      case '4':
        newString += 'o';
        break;
      case '5':
        newString += 'u';
        break;
      default:
        newString += string[i];
    }
  }
  return newString;
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
