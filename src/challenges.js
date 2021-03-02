// Desafio 1
function compareTrue(n1, n2) {
  return n1 && n2;
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
  let newArray = `${array[array.length - 1]}, ${array[0]}`;
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(array) {
// Referência: https://pt.stackoverflow.com/
  let maior = (Math.max.apply(null, array));
  let cont = 0;
  for (let index = 0; index <= array.length; index += 1) {
    if (array[index] === maior) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catt2 = cat2 - mouse;
  cat1 = mouse - cat1;
  if (cat1 < mouse) {
    return 'cat1';
  }
  if (catt2 > mouse) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
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
