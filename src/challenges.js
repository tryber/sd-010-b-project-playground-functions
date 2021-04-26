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
function countBiggerNumber(cont, maiorNumero) {
  let vezesMaiorNumero = 0;
  for (let i = 0; i < cont.length; i += 1) {
    if (cont[i] === maiorNumero) {
      vezesMaiorNumero += 1;
    }
  }
  return vezesMaiorNumero;
}
function biggerNumber(cont) {
  let maiorNumero = cont[0];
  cont.forEach((number) => {
    if (number > maiorNumero[0]) {
      maiorNumero = number;
    }
  });
  return maiorNumero;
}
// Desafio 6
function highestCount(cont) {
  const maiorNumero = biggerNumber(cont);
  const vezesMaiorNumero = countBiggerNumber(cont, maiorNumero);
  return vezesMaiorNumero;
}

function CatBigger(cat, mouse) {
  let contCat = 0;
  for (let i = cat; i > mouse; i -= 1) {
    contCat += 1;
  }
  return contCat;
}

function mouseBigger(cat, mouse) {
  let contCat = 0;
  for (let i = cat; i < mouse; i += 1) {
    contCat += 1;
  }
  return contCat;
}

function checkCat(cat, mouse) {
  let countCat = 0;
  if (cat > mouse) {
    countCat = CatBigger(cat, mouse);
  } else if (cat < mouse) {
    countCat = mouseBigger(cat, mouse);
  }
  return countCat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const countCat1 = checkCat(cat1, mouse);
  const countCat2 = checkCat(cat2, mouse);

  if (countCat1 > countCat2) {
    return ('cat2');
  } if (countCat1 < countCat2) {
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
