// Desafio 1
function compareTrue(value1, value2) {
  let checker = false;
  if (value1 && value2) {
    checker = true;
  }
  return checker;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(array) {
  let concat = `${array[array.length - 1]}, ${array[0]}`;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let greatestNumber = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > greatestNumber) {
      greatestNumber = array[i];
    }
  }
  let counter = 0;
  for (let i2 = 0; i2 < array.length; i2 += 1) {
    if (greatestNumber === array[i2]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let feedback = '';
  let stepscat1 = 0;
  let stepscat2 = 0;
  if (mouse > cat1) {
    for (let cat1pos = cat1; cat1pos !== mouse; cat1pos += 1) {
      stepscat1 += 1;
    }
  } else if (mouse < cat1) {
    for (let cat1pos = cat1; cat1pos !== mouse; cat1pos -= 1) {
      stepscat1 += 1;
    }
  }
  if (mouse > cat2) {
    for (let cat2pos = cat2; cat2pos !== mouse; cat2pos += 1) {
      stepscat2 += 1;
    }
  } else if (mouse < cat2) {
    for (let cat2pos = cat2; cat2pos !== mouse; cat2pos -= 1) {
      stepscat2 += 1;
    }
  }
  if (stepscat1 < stepscat2) {
    feedback = 'cat1';
  } else if (stepscat2 < stepscat1) {
    feedback = 'cat2';
  } else if (stepscat1 === stepscat2) {
    feedback = 'os gatos trombam e o rato foge';
  }
  return feedback;
}

// Desafio 8
function fizzBuzz(array) {
  let feedback = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      feedback.push('fizzBuzz');
    } else {
      if (array[i] % 3 === 0) {
        feedback.push('fizz');
      } else if (array[i] % 5 === 0) {
        feedback.push('buzz');
      } else {
        feedback.push('bug!');
      }
    }
  }
  return feedback;
}

// Desafio 9
function encode(string) {
  let encodedMessage = string;
  encodedMessage = encodedMessage.replace(/a/g, '1');
  encodedMessage = encodedMessage.replace(/e/g, '2');
  encodedMessage = encodedMessage.replace(/i/g, '3');
  encodedMessage = encodedMessage.replace(/o/g, '4');
  encodedMessage = encodedMessage.replace(/u/g, '5');

  return encodedMessage;
}

function decode(string) {
  let decodedMessage = string;

  decodedMessage = decodedMessage.replace(/1/g, 'a');
  decodedMessage = decodedMessage.replace(/2/g, 'e');
  decodedMessage = decodedMessage.replace(/3/g, 'i');
  decodedMessage = decodedMessage.replace(/4/g, 'o');
  decodedMessage = decodedMessage.replace(/5/g, 'u');

  return decodedMessage;
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
