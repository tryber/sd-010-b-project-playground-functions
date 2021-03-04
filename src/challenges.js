// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 == true && valor2 == true) {

    return true;

  } else if (valor1 == false && valor2 == false) {

    return false;
  } else {

    return false;

  }
}
//console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  areaTriangulo = (base * heigth) / 2;

  return areaTriangulo;

}
//console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let recebeString = frase.split(' ');

  return recebeString;

}
//console.log(splitSentence('foguete'));

// Desafio 4
function concatName(fraseArray) {
  // seu código aqui
  let novoFormato = fraseArray[fraseArray.length - 1] + ", " + fraseArray[0];

  return novoFormato

}
//let arrayDeStrings = ['captain', 'my', 'captain'];
//console.log(concatName(arrayDeStrings));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}
//console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let localizaMaior = 0;
  let contMaior = 0;
  for (let i = 0; i <= arrayNumeros.length; i++) {
    if (localizaMaior < arrayNumeros[i]) {
      localizaMaior = arrayNumeros[i];
    }
  }

  for (let j = 0; j <= arrayNumeros.length; j++) {
    if (localizaMaior == arrayNumeros[j]) {
      contMaior++;
    }
  }
  return contMaior;
}
//console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);

  if (distanciaGato1 < distanciaGato2) {

    return 'cat1';

  } else if (distanciaGato1 > distanciaGato2) {

    return 'cat2';

  } else {

    return 'os gatos trombam e o rato foge';

  }

}
console.log(catAndMouse(0, 3, 2));


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
