// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  // ESlint made me write my else like this
  return false;
}

// Desafio 2
function calcArea(base, heigh) {
  let ret = (base * heigh) / 2;
  return ret;
}

// Desafio 3
function splitSentence(s) {
  let split = s.split(' ');
  for (let i = 0; i < split.lenght; i += 1) {
    split[i] += ' ';
  }
  console.log(split);
}

// Desafio 4
function concatName(s) {
  let firstN = s[0];
  let surname = s[s.lenght - 1];
  // LINT made me write line consoleLog like this, es-lint prefer-template error
  console.log(`${surname},  ${firstN}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(c) {
  let high = 0;
  let count = 0;
  for (let i in c) {
    if (c[i] > high) {
      high = c[i];
    } else if (c[i] === high) {
      count += 1;
    }
  }
  return count + 1;
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
