// Desafio 1
function compareTrue(v1, v2) {
  if (v1 && v2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");
}

// Desafio 4
function concatName(arr) {
  tam = arr.length;
  conc = arr[tam - 1] + ", " + arr[0];
  return conc;
}

// Desafio 5
function footballPoints(wins, ties) {
  total = wins * 3 + ties;
  return total;
}

// Desafio 6
function highestCount(num) {
  max = Math.max(...num);
  vezes = 0;
  for (let key in num) {
    if (num[key] == max) {
      vezes = vezes + 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  ca1 = "cat1";
  ca2 = "cat2";
  emp = "os gatos trombam e o rato foge";
  if ((cat1 - mouse) < (cat2 - mouse)) {
    return ca1;
  }
  if ((cat2 - mouse) < (cat1 - mouse)) {
    return ca2;
  }
  if (cat1 == cat2) {
    return emp;
  }
}

// Desafio 8
function fizzBuzz() {
  
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
