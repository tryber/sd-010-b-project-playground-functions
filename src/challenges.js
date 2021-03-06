// Desafio 1
function compareTrue(firstValue, secondValue) {
  // seu código aqui
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  let letter = ' '; let word = '';
  let result = [];
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === letter) {
      result.push(word);
      word = '';
    } else {
      word += phrase[index];
    }
  }
  result.push(word);
  return result;
}

// Desafio 4
function concatName(Array) {
  // seu código aqui
  let endArray = '';
  let result = '';
  for (let index = 0; index < Array.length; index += 1) {
    if (index === Array.length - 1) {
      endArray = Array[index];
    }
  }
  result = `${endArray}, ${Array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let ptsWins = 0;
  let result = 0;
  ptsWins = wins * 3;
  result = ptsWins + ties;
  return result;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let larger = numbers[0];
  let result = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > larger) {
      larger = numbers[index];
      break;
    }
    if (numbers[index] === larger) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let result = ''; let distanceCatOne = mouse - cat1;
  let distanceCatTwo = mouse - cat2;
  if (distanceCatOne < 0) {
    distanceCatOne = (mouse - cat1) * (-1);
  }
  if (distanceCatTwo < 0) {
    distanceCatTwo = (mouse - cat2) * (-1);
  }
  if (distanceCatOne < distanceCatTwo) {
    result = 'cat1';
  } else if (distanceCatOne > distanceCatTwo) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(Array = []) {
  let result = [];
  for (let index = 0; index < Array.length; index += 1) {
    result[index] = condition(Array[index]);
  }
  return result;
}
function condition(Array) {
  let result = '';
  if (Array % 3 === 0 && Array % 5 === 0) {
    result = 'fizzBuzz';
  } else if (Array % 3 === 0) {
    result = 'fizz';
  } else if (Array % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}
// Desafio 9
function encode(test) {
  // seu código aqui
  let result = '';
  for (let index = 0; index < test.length; index += 1) {
    switch (test[index]) {
    case 'a':
      result += '1';
      break;
    case 'e':
      result += '2';
      break;
    case 'i':
      result += '3';
      break;
    case 'o':
      result += '4';
      break;
    case 'u':
      result += '5';
      break;
    default:
      result += test[index];
      break;
    }
  }
  return result;
}
function decode(test) {
  // seu código aqui
  let result = '';
  for (let index = 0; index < test.length; index += 1) {
    switch (test[index]) {
    case '1':
      result += 'a';
      break;
    case '2':
      result += 'e';
      break;
    case '3':
      result += 'i';
      break;
    case '4':
      result += 'o';
      break;
    case '5':
      result += 'u';
      break;
    default:
      result += test[index];
      break;
    }
  } return result;
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
