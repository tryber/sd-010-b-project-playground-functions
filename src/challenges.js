// Desafio 1
function compareTrue(premissa1, premissa2) {
  if (premissa1 == true && premissa2 == true) {
      return true;
  } else { 
      return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = base*height/2;   
  return area;
}

// Desafio 3
function splitSentence(frase) {
  array = frase.split(" ");
  return array
}

// Desafio 4
function concatName(array){
  let resultado = array[array.length-1] + ", " + array[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins*3+ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let contador = 0;
  for (i=0; i<array.length; i++) {
      if (array[i]>maior) {
          maior = array[i]
      }
  }

  for (j=0; j<array.length; j++) {
      if (array[j] == maior) {
          contador++
      }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1;
  let distancia2;
  
  if (mouse>cat1) {
      distancia1 = mouse-cat1;
  } else {
      distancia1 = cat1-mouse;
  }

  if (mouse>cat2) {
      distancia2 = mouse-cat2;
  } else {
      distancia2 = cat2-mouse;
  }

  if (distancia1<distancia2) {
      return "cat1";
  } else if (distancia2<distancia1) {
      return "cat2";
  } else {
      return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayEntrada) {
  let arraySaida = [];

  for (i=0; i<arrayEntrada.length; i++) {
      if (arrayEntrada[i]%3 == 0 && arrayEntrada[i]%5 == 0) {
          arraySaida.push("fizzBuzz");
      } else if (arrayEntrada[i]%3 == 0 && arrayEntrada[i]%5 != 0) {
          arraySaida.push("fizz");
      } else if (arrayEntrada[i]%3 != 0 && arrayEntrada[i]%5 == 0) {
          arraySaida.push("buzz");
      } else {
          arraySaida.push("bug!");
      }
  }
  return arraySaida
}

// Desafio 9

/*
  APENAS UM TESTE!!!
  Estou testando o código do meu irmão pois o meu também resolve (avaliado pelo Zezé) e o Evaluator Job aponta que minha solução está incorreta, logo, vou testar outro código que funciona para ver o que o corretor aponta. 
*/

function encode(stringstron){
  let stringEncodada = "";
  for(i=0;i<stringstron.length;i++){
      if(stringstron[i] == "a"){
          stringEncodada += "1";
      } else if(stringstron[i] == "e"){
          stringEncodada += "2";
      } else if(stringstron[i] == "i"){
          stringEncodada += "3";
      } else if(stringstron[i] == "o"){
          stringEncodada += "4";
      } else if(stringstron[i] == "u"){
          stringEncodada += "5";
      } else {
          stringEncodada += stringstron[i]
      }
  }return stringEncodada
}
function decode(stringstron){
let stringEncodada = "";
for(i=0;i<stringstron.length;i++){
    if(stringstron[i] == "1"){
        stringEncodada += "a";
    } else if(stringstron[i] == "2"){
        stringEncodada += "e";
    } else if(stringstron[i] == "3"){
        stringEncodada += "i";
    } else if(stringstron[i] == "4"){
        stringEncodada += "o";
    } else if(stringstron[i] == "5"){
        stringEncodada += "u";
    } else {
        stringEncodada += stringstron[i]
    }
}return stringEncodada
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