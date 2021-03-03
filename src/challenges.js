// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  let compardor = false;
  if (valor1 === true && valor2 === true) {
    compardor = true;
  }
  return compardor
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let array = [];
  let palavra = "";
  for (let indexString = 0; indexString <= string.length ; indexString += 1) {
    if (string[indexString] === " " || indexString === string.length) {
      array.push(palavra);
      palavra = "";
    } else {
      palavra = palavra + string[indexString];
    }
  }
  return array;
}
// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let primeiro = arrayString[0];
  let ultimo = arrayString[arrayString.length - 1];

  return ultimo  + ", " + primeiro;
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = ((wins * 3 ) + (ties * 1));
  return pontos; 
}
// Desafio 6
function highestCount(arrayNumber) {
  // seu código aqui
  let contador = 1;
  let maiorNumber = arrayNumber[0];
  for (let index = 1; index < arrayNumber.length; index +=1) {
    if (arrayNumber[index] > maiorNumber) {
      maiorNumber = arrayNumber[index];
      contador = 1;
    } else if (arrayNumber[index] === maiorNumber) {
      contador += 1;
    } else {
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let menorTamanho;
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 < cat2) {
    menorTamanho = "cat1";
  } else if (cat2 < cat1) {
    menorTamanho = "cat2";
  } else {
    menorTamanho = "os gatos trombam e o rato foge";
  }
  return menorTamanho;
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
console.log(catAndMouse(1,0,2));
