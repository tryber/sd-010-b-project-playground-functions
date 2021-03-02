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
function encode(frase) {
  let fraseCovertida = "";

  for (i=0; i<frase.length; i++) {
      if (frase[i]!="a" && frase[i]!="e" && frase[i]!="i" && frase[i]!="o" && frase[i]!="u") {
          fraseCovertida += frase[i];
      } else if (frase[i]=="a") {
          fraseCovertida += "1";
      } else if (frase[i]=="e") {
          fraseCovertida += "2";
      } else if (frase[i]=="i") {
          fraseCovertida += "3";
      } else if (frase[i]=="o") {
          fraseCovertida += "4";
      } else {
          fraseCovertida += "5";
      }
  }
  return fraseCovertida;
}

function decode(frase) {
  let fraseCovertida = "";

  for (i=0; i<frase.length; i++) {
      if (frase[i]!="1" && frase[i]!="2" && frase[i]!="3" && frase[i]!="4" && frase[i]!="5") {
          fraseCovertida += frase[i];
      } else if (frase[i]=="1") {
          fraseCovertida += "a";
      } else if (frase[i]=="2") {
          fraseCovertida += "e";
      } else if (frase[i]=="3") {
          fraseCovertida += "i";
      } else if (frase[i]=="4") {
          fraseCovertida += "o";
      } else if (frase[i=="5"]) {
          fraseCovertida += "u";
      }
  }
  return fraseCovertida;
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