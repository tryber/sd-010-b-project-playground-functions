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
  areaTriangulo = (base*height) / 2;
  
  return areaTriangulo;
}

// Desafio 3
function splitSentence(frase) {
  let arrayFrase = [];
  arrayFrase = frase.split(" ");
  return arrayFrase;
  }

// Desafio 4
function concatName(primeiroItem) {
  
  let conectaItem = (primeiroItem[primeiroItem.length - 1]) + ", " + (primeiroItem[0]);
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
  let qntNumeroMaior = 0;
  for(let cont=0;cont < repeteMaior.length-1; cont += 1) {
    if (repeteMaior[cont] >= repeteMaior[cont+1]) {
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
function catAndMouse(mouse,cat1,cat2) {
  let distancia1 = Math.abs (cat1 - mouse);
  let distancia2 = Math.abs (cat2 - mouse);

  if(distancia1 > distancia2){
    
    let ganhardorCat2 = "cat2";
    return ganhardorCat2;
  
  } else if (distancia1< distancia2){
    
    let ganhardorCat1 = "cat1";
    return ganhardorCat1;

  } else if (distancia1 === distancia2){
    let ratoFoge = "os gatos trombam e o rato foge";
    return ratoFoge;
  }
}

// Desafio 8
function fizzBuzz(divisivelArray) {
  for(let cont=0; cont < divisivelArray.length; cont += 1){
    if(divisivelArray[cont] % 3 == 0){
      return "fizz";
    } else if (divisivelArray[cont] % 5 == 0){
      return "buzz";
    } else if (divisivelArray[cont] % 3 == 0 && divisivelArray[cont] % 5 == 0){
      return "fizzBuzz";
    } else {
      return "bug!";
    }
    
  }

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
