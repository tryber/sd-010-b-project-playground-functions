// Desafio 1
function compareTrue(input1, input2) {
  if (input1 === true && input2 === true) {
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
  let stringSeparada = string.split(' ');
  return stringSeparada;
}

// Desafio 4
function concatName(items) {
  let lastItem = items[items.length - 1];
  let firstItem = items[0];
  let lastAndFirstItems = `${lastItem}, ${firstItem}`;

  return lastAndFirstItems;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = ((wins * 3) + ties);

  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let higherNumber = numbers[0];
  let repetitionHigherNumber = 0;

  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] > higherNumber) {
      higherNumber = numbers[x];
    }
  }

  for (let y = 0; y < numbers.length; y++) {
    if (numbers[y] === higherNumber) {
      repetitionHigherNumber++;
    }
  }

  return repetitionHigherNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1;
  let mouseCat2;

  if (mouse > cat1) {
    mouseCat1 = mouse - cat1;
  } else {
      mouseCat1 = cat1 - mouse;
    }

  if (mouse > cat2) {
    mouseCat2 = mouse - cat2;
  } else {
      mouseCat2 = cat2 - mouse;
    }

  if (mouseCat1 < mouseCat2) {
    return 'Cat1';
  } else if (mouseCat1 > mouseCat2) {
    return 'Cat2';
  } else {
    return 'Os gatos trombam e o rato foge.';
  }
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
