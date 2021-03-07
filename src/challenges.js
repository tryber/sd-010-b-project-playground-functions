const { TestScheduler } = require("jest");

// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigh) {
  let areaTriangulo = (base * heigh)/2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(sentenca) {
  let separatedSentence = sentenca.split(' ');
  return separatedSentence;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  ultimoItem = array[array.length-1];
  primeiroItem = array[0];
  ultimoPrimeiro = ultimoItem + ", " + primeiroItem;
  return ultimoPrimeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 3;
  let pointstie = 1;
  let total = (wins * pointsWin) + (ties * pointstie);
  return total;
};

// Desafio 6
function highestCount(array) {
  let maiorNumero = array[0]
  let amountOfBigNumber = 0;
  for (let index in array) {
    if (array[index] >= maiorNumero) {
      maiorNumero = array[index];
    }
  } for ( let index in array) {
      if (array[index] === maiorNumero) {
        amountOfBigNumber += 1;
      }
    }
  return amountOfBigNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  return Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse) ? 'cat1' :
  Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse) ? 'cat2'
  : 'os gatos trombam e o rato foge';
}
 

// Desafio 8
function fizzBuzz(array) {
  let array1 = [];
  for (i = 0; i < array.length; i+=1) {    
    if ((array[i] %5 == 0) && (array[i] % 3 == 0)) {
      array1.push("fizzBuzz");
    } else if (array[i] % 3 == 0) {
      array1.push("fizz");
    } else if (array[i] %5 == 0) {
      array1.push("buzz");
    } else {
      array1.push("bug!");
    }
  
  }  return array1;
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
