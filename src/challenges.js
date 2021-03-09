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
  let f = s.split(' ');
  return f;
}

// Desafio 4
function concatName(a) {
  let firstN = a[0];
  let surname = a[a.length - 1];
  // LINT made me write line consoleLog like this, es-lint prefer-template error
  let ret = `${surname}, ${firstN}`;
  return ret;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(c) {
  let storage = 0;
  let count = 0;
  for (let i = 0; i < c.length; i += 1) {
    if (c[i] > storage) {
      storage = c[i];
    }
  }
  for (let i = 0; i < c.length; i += 1) {
    if (storage === c[i]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let ret = '';
  let dist1 = Math.abs(cat1 - mouse);
  let dist2 = Math.abs(cat2 - mouse);
  if (dist1 === dist2) {
    ret = 'os gatos trombam e o rato foge';
  } else if (dist1 > dist2) {
    ret = 'cat2';
  } else {
    ret = 'cat1';
  }
  return ret;
}

// Desafio 8
function fizzBuzz(a) {
  let ret = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] % 5 === 0 && a[i] % 3 === 0) {
      ret.push('fizzBuzz');
    } else if (a[i] % 3 === 0) {
      ret.push('fizz');
    } else if (a[i] % 5 === 0) {
      ret.push('buzz');
    } else {
      ret.push('bug!');
    }
  }
  return ret;
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
