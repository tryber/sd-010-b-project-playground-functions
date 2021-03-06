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
  let primeiroUltimo = ultimoArray + ', ' + array[0];
  return primeiroUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  return pontos;
}

// Desafio 6
function highestCount(contador) {
  let maiorNumero = contador[0];
  let vezesMaiorNumero = 0;
  for (let i = 1; i < contador.length; i++) {
    if (contador[i] > maiorNumero[0]) {
      maiorNumero = contador[i];
    }
  }
  for (let i = 0; i < contador.length; i++) {
    if (contador[i] == maiorNumero) {
      vezesMaiorNumero ++;
    }
  }
  return vezesMaiorNumero;  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cCat1 = 0;
  let cCat2 = 0;
  if (cat1 > mouse) {
    for (let i = cat1; i > mouse; i--) {
      cCat1 ++;
    }
  } else if (cat1 < mouse) {
    for (let i = cat1; i < mouse; i++) {
      cCat1 ++;
    }    
  }
  if (cat2 > mouse) {
    for (let i = cat2; i > mouse; i--) {
      cCat2 ++;
    }
  } else if (cat2 < mouse) {
    for (let i = cat2; i > mouse; i++) {
      cCat2 ++;
    }    
  }
  if (cCat1 > cCat2) {
    return ('cat2');
  } else if (cCat1 < cCat2) {
    return ('cat1');
  }
  return ('os gatos trombam e o rato foge')
}

// Desafio 8
function fizzBuzz (ary) {
  let novaArray = [];
  let arr = [];
  for (let i = 0; i > ary.length; i++) {
    arr.push(ary[i]);
    // if (ary[i] % 3 === 0 && ary[i] % 5 === 0) {
    //   novaArray.push('fizzBuzz');      
    // } else if (ary[i] % 3 === 0) {
    //   novaArray.push('fizz');
    // } else if (ary[i] % 5 === 0) {
    //   novaArray.push('buzz');
    // } else {
    //   novaArray.push('bug!');
    // }
  }
  return arr;
  // return arr;
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
