// Desafio 1
function compareTrue(a, b) {
  return a === true && b === true ? 'true' : 'false';
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(arr) {
  let qtt = arr.length;
  let firstString = arr[0];
  let lastString = arr[qtt - 1];

  return `${lastString}, ${firstString}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let max = Math.max(...array);
  let qtt = null;
  array.forEach((e) => {
    qtt += max === e ? 1 : 0;
  });
  return qtt;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let nearCat = (mouse - cat1) < (mouse - cat2) ? 'cat1' : 'cat2';
  nearCat = cat1 === cat2 ? 'os gatos trombam e o rato foge' : nearCat;
  return nearCat;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayResult = [];

  array.forEach((e) => {
    if ((e % 3 === 0) && (e % 5 === 0)) {
      arrayResult.push('fizzBuzz');
    } else if (e % 3 === 0) {
      arrayResult.push('fizz');
    } else if (e % 5 === 0) {
      arrayResult.push('buzz');
    } else {
      arrayResult.push('bug!');
    }
  });

  return arrayResult;
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
