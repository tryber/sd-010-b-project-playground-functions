/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(text) {
  let array = text.split(' ');
  return array;
  /* fonte de conhecimento
  developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */
}

// Desafio 4
function concatName(array) {
  let ultimoArray = array.length - 1;
  let primeiroUltimo = `${array[ultimoArray]}, ${array[0]}`;
  return primeiroUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(cont) {
  let maiorNumero = cont[0];
  let vezesMaiorNumero = 0;
  for (let i = 1; i < cont.length; i += 1) {
    if (cont[i] > maiorNumero[0]) {
      maiorNumero = cont[i];
    }
  }
  for (let i = 0; i < cont.length; i += 1) {
    if (cont[i] === maiorNumero) {
      vezesMaiorNumero += 1;
    }
  }
  return vezesMaiorNumero;
}

// Desafio 7
// eslint-disable-next-line complexity
// eslint-disable-next-line max-lines-per-function
function catAndMouse(mouse, cat1, cat2) {
  let cCat1 = 0;
  let cCat2 = 0;
  if (cat1 > mouse) {
    for (let i = cat1; i > mouse; i -= 1) {
      cCat1 += 1;
    }
  } else if (cat1 < mouse) {
    for (let i = cat1; i < mouse; i += 1) {
      cCat1 += 1;
    }
  }
  if (cat2 > mouse) {
    for (let i = cat2; i > mouse; i -= 1) {
      cCat2 += 1;
    }
  } else if (cat2 < mouse) {
    // eslint-disable-next-line for-direction
    for (let i = cat2; i > mouse; i += 1) {
      cCat2 += 1;
    }
  }
  if (cCat1 > cCat2) {
    return ('cat2');
  } if (cCat1 < cCat2) {
    return ('cat1');
  }
  return ('os gatos trombam e o rato foge');
}

function check(ary, i) {
  const novaArray = [];
  if (ary[i] % 3 === 0 && ary[i] % 5 === 0) {
    novaArray.push('fizzBuzz');
  } else if (ary[i] % 3 === 0) {
    novaArray.push('fizz');
  } else if (ary[i] % 5 === 0) {
    novaArray.push('buzz');
  } else {
    novaArray.push('bug!');
  }
  return novaArray;
}
// Desafio 8
function fizzBuzz(ary) {
  const novoArray = [];
  for (let i = 0; i < ary.length; i += 1) {
    novoArray.push(...check(ary, i));
  }
  return novoArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
// Desafio 9
function encode(text) {
  const textArray = Array.from(text);
  const arrCode = [['a', 1], ['e', 2], ['i', 3], ['o', 4], ['u', 5]];
  arrCode.forEach(([string, number]) => {
    textArray.forEach((letter, index) => {
      if (letter === string) {
        textArray[index] = number;
      }
    });
  });
  const newPhrase = textArray.join('');
  return newPhrase;
}

function decode(text) {
  const textArray = Array.from(text);
  const arrCode = [['a', '1'], ['e', '2'], ['i', '3'], ['o', '4'], ['u', '5']];
  arrCode.forEach(([string, number]) => {
    textArray.forEach((letter, index) => {
      if (letter === number) {
        textArray[index] = string;
      }
    });
  });
  const newPhrase = textArray.join('');
  return newPhrase;
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
