// Desafio 1
function compareTrue(n1, n2) {
  return (n1 && n2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

function concatName(array) {
  let newArray = `${array[array.length - 1]} ${array[0]}`;
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount() {
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position;
  if (cat2 === mouse && cat1 === mouse) {
    position = 'os gatos trombam e o rato foge';
  } else if (cat1 > cat2 && cat1 <= mouse) {
    position = 'cat1';
  } else {
    position = 'cat2';
  }
  return position;
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
