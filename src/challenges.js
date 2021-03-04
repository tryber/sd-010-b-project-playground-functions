// Desafio 1

function compareTrue(boolean1,boolean2) {

  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo;
  areaTriangulo = (base * height) / 2;
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
  for (let cont=0;cont < repeteMaior.length - 1; cont += 1) {
    if (repeteMaior[cont] >= repeteMaior[cont + 1]) {
      maiorNumero = repeteMaior[cont];
    }
  }
  for (let cont=0;cont < repeteMaior.length; cont+=1) {
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

  if (distancia1 > distancia2) {
    
    let ganhardorCat2 = "cat2";
    return ganhardorCat2;
  
  } else if (distancia1< distancia2) {
    
    let ganhardorCat1 = "cat1";
    return ganhardorCat1;

  } else if (distancia1 === distancia2) {
    let ratoFoge = "os gatos trombam e o rato foge";
    return ratoFoge;
  }
}

// Desafio 8

function fizzBuzz(divisivelArray) {
  let resultadoDividir = [];

  for (let cont=0; cont < divisivelArray.length; cont += 1) {

    if (divisivelArray[cont] % 3 == 0 && divisivelArray[cont] % 5 != 0) {
      resultadoDividir.push("fizz");
    } else if (divisivelArray[cont] % 5 == 0 && divisivelArray[cont] % 3 != 0) {
      resultadoDividir.push("buzz");
    } else if (divisivelArray[cont] % 3 == 0 && divisivelArray[cont] % 5 == 0) {
      resultadoDividir.push("fizzBuzz");
    } else {
      resultadoDividir.push("bug!");
    }
  }
  return resultadoDividir;
  
}
console.log(fizzBuzz([5,15,4,45]));


// Desafio 9
function encode(paramCodificado) {
  
    let arrayCodificado = paramCodificado.split('');

  for(let cont=0; cont < arrayCodificado.length; cont += 1){
    if (arrayCodificado[cont] == a){
      
      arrayCodificado[cont] = "1";

    } else if (arrayCodificado[cont] == e) {

      arrayCodificado[cont] = "2";

    } else if (arrayCodificado[cont] == i) {

      arrayCodificado[cont] = "3";
      
    } else if (arrayCodificado[cont] == o) {
      
      arrayCodificado[cont] = "4";

    } else if (arrayCodificado[cont] == u){

      arrayCodificado[cont] = "5";

    }
  }
  
}
function decode(paramDecodificado) {

  let arrayDecodificado = paramDecodificado.split('');

  for(let cont=0; cont < arrayDecodificado.length; cont += 1){
    if (arrayDecodificado[cont] == 1){
      
      arrayDecodificado[cont] = "a";

    } else if (arrayDecodificado[cont] == 2) {

      arrayDecodificado[cont] = "e";

    } else if (arrayDecodificado[cont] == 3) {

      arrayDecodificado[cont] = "i";
      
    } else if (arrayDecodificado[cont] == 4) {
      
      arrayDecodificado[cont] = "o";

    } else if (arrayDecodificado[cont] == 5){

      arrayDecodificado[cont] = "u";

    }
  }
  return 
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
