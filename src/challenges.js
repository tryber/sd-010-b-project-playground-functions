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
function footballPoints(vit, emp) {
  wins = vit;
  ties = emp;
  total = wins * 3 + ties;
  return total;
}

// Desafio 6
function highestCount(num) {
  max = Math.max(...num);
  vezes = 0;
  for (const key in num) {
    if (key == max) {
      vezes += 1;
    }
  }
  return vezes;
}

// Desafio 7
function catAndMouse(rat, c1, c2) {
  mouse = rat;
  cat1 = c1;
  cat2 = c2;
  ca1 = 'cat1';
  ca2 = 'cat2';
  emp = 'os gatos trombam e o rato foge'
  if (cat1 < cat2) {
    return ca1;
  } else if (cat2 < cat1) {
    return ca2;
  } else {
    return emp;
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
