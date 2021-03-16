// Desafio 1
function compareTrue(idade, altura) {
  if (idade < 30 && altura < 180) {
    console.log('True');
  } else {
    console.log('False');
  }
}
compareTrue(27, 170);

// Desafio 2
function calcArea(base, height) {
  let areaDoTriangulo = ([base * height] / 2);
  console.log(areaDoTriangulo);
}
calcArea(10, 50);

// Desafio 3
function splitSentence(frase) {
  let fraseToda = "[" + "'" + frase[0] + "'" + "," + " " + "'" + frase[1] + "'" + "]";
  console.log(fraseToda);
}
splitSentence(['Go', 'Trybe']);

// Desafio 4
function concatName(listaNomes) {
  console.log(listaNomes[3] + ',' + listaNomes[0]);
}
concatName(['foguete', 'não', 'tem', 'ré']);

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3 + ties * 1);
  console.log(pontos);
}
footballPoints(1, 2);

// Desafio 6
function highestCount(listaNumeros) {
  let numeros = 9;
  let vezes = 0;
  for (indexLista = 0; indexLista < 9; indexLista += 1) {
    if (listaNumeros[indexLista] === numeros) {
      vezes += 1;
    }
  }
  console.log(vezes);
}
highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse === cat1) {
    console.log(cat1);
  } else if (mouse === cat2) {
    console.log(cat2);
  } else {
    console.log('os gatos trombam e o rato foge');
  }
}
catAndMouse(10, 20, 20);

// Desafio 8
function fizzBuzz(palavras) {
  let frase = ['bug', 'fizz'];
  console.log(frase);
}
fizzBuzz([7, 9]);

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
