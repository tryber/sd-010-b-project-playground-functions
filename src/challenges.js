// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 == true && valor2 == true) {

    return true;

  } else if (valor1 == false && valor2 === false) {
    
    return false;
  } else {

    return false;

  }
}
//console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  areaTriangulo = (base * heigth)/2;

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
  let novoFormato = fraseArray[fraseArray.length-1] + ", " + fraseArray[0];

  return novoFormato

}
//let arrayDeStrings = ['captain', 'my', 'captain'];
//console.log(concatName(arrayDeStrings));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
