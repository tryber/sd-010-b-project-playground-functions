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

// Desafio 4
function concatName(array) {
  let newArray = [array[array.length - 1], array[0]];
  return newArray.toString();
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
  if (cat1 > cat2 && cat1 <= mouse) {
    position = 'cat1';
  } else if (cat2 > cat1 && cat2 <= mouse) {
    position = 'cat2';
  } else {
    position = 'os gatos trombam e o rato foge';
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
