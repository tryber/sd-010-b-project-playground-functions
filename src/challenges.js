// Desafio 1
// let a = true, b = true;
// console.log(compareTrue(a, b));
function compareTrue(firstValue, secondValue) {
  // if (fisrtValue && secondValue) {
  //   return true;
  // } else {
  //   return false;
  // }
  return (firstValue && secondValue);
}

// Desafio 2
// let base = 51, height = 1;
// console.log(calcArea(base, height));
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
// let sentence = "vamo que vamo";
// console.log(splitSentence(sentence));
function splitSentence(sentence) {
  // let words = [];
  return sentence.split(' '); // I found the split() function at https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
}

// Desafio 4
// let array = ['captain', 'my', 'captain'];
// console.log(concatName(array));
function concatName(contact) {
  return contact[contact.length - 1].concat(', ', contact[0]); // I found the concat() function at https://www.w3schools.com/jsref/jsref_concat_string.asp
}

// Desafio 5
// let win = 0, tie = 0;
// console.log(footballPoints(win, tie));
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
// let numbers = [6, 7, 9, 9, 7, 7];
// console.log(highestCount(numbers));
function getBigger(arrayNumbers) {
  let bigger = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] >= bigger) {
      bigger = arrayNumbers[i];
    }
  }
  return bigger;
}

function manyTimes(arrayNumbers) {
  let times = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (getBigger(arrayNumbers) === arrayNumbers[i]) {
      times++;
    }
  }
  return times;
}

function highestCount(arrayNumbers) {
  return manyTimes(arrayNumbers);
}

// Desafio 7
// let m = 5, c1 = 2, c2 = 3;
// console.log(catAndMouse(m, c1, c2));
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance, cat2Distance;
  if (mouse > cat1) {
    cat1Distance = mouse - cat1;
  } else {
    cat1Distance = cat1 - mouse;
  }
  if (mouse > cat2) {
    cat2Distance = mouse - cat2;
  } else {
    cat2Distance = cat2 - mouse;
  }

  if (cat1Distance < cat2Distance) {
    return "cat1";
  } else if (cat2Distance < cat1Distance) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
// let array = [9, 25];
// console.log(fizzBuzz(array));
function fizzBuzz(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (((numbers[i] % 3) === 0) && ((numbers[i] % 5) === 0)) {
      numbers[i] = "fizzBuzz";
    } else if ((numbers[i] % 3) === 0) {
      numbers[i] = "fizz";
    } else if ((numbers[i] % 5) === 0) {
      numbers[i] = "buzz";
    } else {
      numbers[i] = "bug!"
    }
  }
  return numbers;
}

// Desafio 9
// I found the replace() function at https://www.w3schools.com/jsref/jsref_replace.asp
// let code = 'hi, there!';
// console.log(encode(code));
function encode(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === 'a') {
      string = string.replace(string[i], 1);
    } else if (string[i] === 'e') {
      string = string.replace(string[i], 2);
    } else if (string[i] === 'i') {
      string = string.replace(string[i], 3);
    } else if (string[i] === 'o') {
      string = string.replace(string[i], 4);
    } else if (string[i] === 'u') {
      string = string.replace(string[i], 5);
    }
  }
  return string;
}
// code = 'h3, th2r2!';
// console.log(decode(code));
function decode(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '1') {
      string = string.replace(string[i], 'a');
    } else if (string[i] === '2') {
      string = string.replace(string[i], 'e');
    } else if (string[i] === '3') {
      string = string.replace(string[i], 'i');
    } else if (string[i] === '4') {
      string = string.replace(string[i], 'o');
    } else if (string[i] === '5') {
      string = string.replace(string[i], 'u');
    }
  }
  return string;
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
