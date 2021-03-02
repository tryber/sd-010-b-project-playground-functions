// Desafio 1

function compareTrue(boolean1, boolean2) {

  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo;
  areaTriangulo = (base*height)/2;
  
  return areaTriangulo;
}

// Desafio 3
function splitSentence(frase) {
  let arrayFrase = [];
  arrayFrase = frase.split(" ");
  return arrayFrase;
  }


// Desafio 4
function concatName(ultimoPrimeiroItem) {
  
  let conectaItem = (ultimoPrimeiroItem[ultimoPrimeiroItem.length - 1]) + ", " + (ultimoPrimeiroItem[0]);
  return conectaItem;

}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = wins * 3;
  let pontosTies = ties * 1;
  let pontosTotais = pontosTies + pontosWins;
  
  return pontosTotais;
}

// Desafio 6

function highestCount(repeteMaior) {
  
  let maiorNumero;
  let qntNumeroMaior = 1;
  for(let cont=0;cont < repeteMaior.length-1; cont += 1) {
    if (repeteMaior[cont] > repeteMaior[cont+1]) {
      maiorNumero = repeteMaior[cont];
    }
  }
  for(let cont=0;cont < repeteMaior.length; cont+=1) {
    if (maiorNumero === repeteMaior[cont]) {
      qntNumeroMaior += 1;
    }
  }
  return qntNumeroMaior;
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
