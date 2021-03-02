// Desafio 1
// let a = 1, b = 1;
// console.log(compareTrue(a, b));
function compareTrue(fisrtValue, secondValue) {
  if ((fisrtValue == true) && (secondValue == true)) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
// let base = 51, height = 1;
// console.log(calcArea(base, height));
function calcArea(base, height) {
  return ((base * height)/2);
}

// Desafio 3
// let sentence = "vamo que vamo";
// console.log(splitSentence(sentence));
function splitSentence(sentence) {
  let words = [];
  return words = sentence.split(" "); // I found the split() function at https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
}

// Desafio 4
// let array = ['captain', 'my', 'captain'];
// console.log(concatName(array));
function concatName(contact) {
  return contact[contact.length - 1].concat(', ',  contact[0]); // I found the concat() function at https://www.w3schools.com/jsref/jsref_concat_string.asp
}

// Desafio 5
// let win = 0, tie = 0;
// console.log(footballPoints(win, tie));
function footballPoints(wins, ties) {
  return ((wins * 3) + tie);
}

// Desafio 6
// let numbers = [0, 0, 0];
// console.log(highestCount(numbers));
function highestCount(arrayNumbers) {
  let bigger = 0, times = 0;
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] >= bigger) {
      bigger = arrayNumbers[i];
    }
  }
  for (let i = 0; i < arrayNumbers.length; i++) {
    if (bigger === arrayNumbers[i]) {
      times++;
    }
  }
  return times
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
// let array = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(array));
function fizzBuzz(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (((numbers[i] % 3) === 0) && ((numbers[i] % 5) === 0)) {
      numbers[i] = "fizzbuzz";
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
