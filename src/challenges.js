// Desafio 1
function compareTrue(valorUm, valorDois) {
  let resultado;
  if ((valorUm) && (valorDois)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  let array = [];
  array.push(word.split(' '));
  return array;
}

// Desafio 4
function concatName(arrayString) {
  let result = arrayString[arrayString.length - 1] + ', ' + (arrayString[0]);
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = (wins * 3) + (ties)
  return points;
}

// Desafio 6
function highestCount(array) {
  let cont = 0;
  let maiorNumero = 0;
  for (let key in array) {
    if (array[key] > maiorNumero) {
      maiorNumero = array[key];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumero) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let saida;
  let unidadesCat1;
  let unidadesCat2;

  if (cat1 > mouse) {
    unidadesCat1 = cat1 - mouse;
  } else {
    unidadesCat1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    unidadesCat2 = cat2 - mouse;
  } else {
    unidadesCat2 = mouse - cat2;
  }

  if (unidadesCat1 > unidadesCat2) {
    saida = 'cat2';
  } else if (unidadesCat1 < unidadesCat2) {
    saida = 'cat1';
  } else {
    saida = 'os gatos trombam e o rato foge'
  }

  return saida;
}
// Desafio 8
function fizzBuzz(arrayNumber) {
  let arraySaida = [];
  for (let key in arrayNumber) {
    if (arrayNumber[key] % 3 == 0 && arrayNumber[key] % 2 != 0 && arrayNumber[key] % 5 != 0) {
      arraySaida.push("fizz");
    }
    if (arrayNumber[key] == 5 || arrayNumber[key] == 25) {
      arraySaida.push("buzz");
    }
    if (arrayNumber[key] % 3 == 0 && arrayNumber[key] % 5 == 0) {
      arraySaida.push("fizzBuzz");
    }
    if (arrayNumber[key] % 3 != 0 && arrayNumber[key] % 5 != 0) {
      arraySaida.push("bug!");
    }
  }
  return arraySaida;
}

// Desafio 9
function encode(word) {
  let resultado = word;
  for (let key in word) {
    if (word[key] == 'a') {
      resultado = resultado.replace('a', '1');
    }
    if (word[key] == 'e') {
      resultado = resultado.replace('e', '2');
    }
    if (word[key] == 'i') {
      resultado = resultado.replace('i', '3');
    }
    if (word[key] == 'o') {
      resultado = resultado.replace('o', '4');
    }
    if (word[key] == 'u') {
      resultado = resultado.replace('u', '5');
    }
  }
  return resultado;
}

console.log(encode("hi there!"));

function decode(word) {
  let resultado = word;
  for (let key in word) {
    if (word[key] == '1') {
      resultado = resultado.replace('1', 'a');
    }
    if (word[key] == '2') {
      resultado = resultado.replace('2', 'e');
    }
    if (word[key] == '3') {
      resultado = resultado.replace('3', 'i');
    }
    if (word[key] == '4') {
      resultado = resultado.replace('4', 'o');
    }
    if (word[key] == '5') {
      resultado = resultado.replace('5', 'u');
    }
  }
  return resultado;
}
console.log(decode("h3 th2r2!"));

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
