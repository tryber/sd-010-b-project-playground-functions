// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height)) / 2;
  return (area);
}

// Desafio 3
function splitSentence(palavra) {
  let resultado = palavra.split(' ');
  return (resultado);
}

// Desafio 4
function concatName(name) {
  let pos = (name[name.length - 1]);
  let firstLast = `${pos}, ${name[0]}`;
  return (firstLast);
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = ((wins * 3) + (ties * 1));
  return (points);
}

// Desafio 6
function highestCount(qtdLarger) {
  let num = qtdLarger;
  let high = 0;
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] > high) {
      high = num[i];
    }
  }
  let cont = 0;
  for (let i = 0; i < num.length; i += 1) {
    if (num[i] === high) {
      cont = cont += 1;
    }
  }
  return (cont);
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
