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
  let primeiroUltimo = array[ultimoArray] + ', ' + array[0];
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
  for (let i = 1; i < cont.length; i+= 1) {
    if (cont[i] > maiorNumero[0]) {
      maiorNumero = cont[i];
    }
  }
  for (let i = 0; i < cont.length; i+= 1) {
    if (cont[i] === maiorNumero) {
      vezesMaiorNumero += 1;
    }
  }
  return vezesMaiorNumero;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cCat1 = 0;
  let cCat2 = 0;
  if (cat1 > mouse) {
    for (let i = cat1; i > mouse; i-= 1) {
      cCat1 += 1;
    }
  } else if (cat1 < mouse) {
    for (let i = cat1; i < mouse; i+= 1) {
      cCat1 += 1;
    }    
  }
  if (cat2 > mouse) {
    for (let i = cat2; i > mouse; i-= 1) {
      cCat2 += 1;
    }
  } else if (cat2 < mouse) {
    for (let i = cat2; i > mouse; i+= 1) {
      cCat2 += 1;
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
  for (let i = 0; i < ary.length; i+= 1) {
    if (ary[i] % 3 === 0 && ary[i] % 5 === 0) {
      novaArray.push('fizzBuzz');     
    } else if (ary[i] % 3 === 0) {
      novaArray.push('fizz');
    } else if (ary[i] % 5 === 0) {
      novaArray.push('buzz');
    } else {
       novaArray.push('bug!');
    }    
  }
  return novaArray;
}

// Desafio 9
function encode() {
//   /* fonte de conhecimento
//   developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace */
//   let pegaLetra = [];
//   let trocaLetra = '';
//   for (let i = 0; i < string.length; i++) {    
//     if (string[i] == 'a') {
//       pegaLetra.push(string[i]);
//     } else if (string[i] == 'e') {
//       pegaLetra.push(string[i]);
//     } else if (string[i] == 'i') {
//       pegaLetra.push(string[i]);
//     } else if (string[i] == 'o') {
//       pegaLetra.push(string[i]);
//     } else if (string[i] == 'u') {
//       pegaLetra.push(string[i]);
//     }
//   }
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == 'a') {      
//     } else if (string[i] == 'e') {
//       pegaLetra.push(string[i]);
//     } else if (string[i] == 'i') {
//       pegaLetra.push(string[i]);
//     } else if (string[i] == 'o') {
//       pegaLetra.push(string[i]);
//     } else if (string[i] == 'u') {
//       pegaLetra.push(string[i]);
//     }
//   }

  
//   return stringFinal;
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
