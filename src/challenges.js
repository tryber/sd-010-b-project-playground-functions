// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }else if ( valor1 === true && valor2 === false || valor1 === false && valor2 === true) {
    return false;
  } else if (valor1 === false && valor2 === false) {
    return false;
  }
}
console.log(compareTrue(false, false)); 
// Desafio 2
function calcArea(base, altura) {
  let calcArea = (base * altura) / 2;
  return calcArea;  
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence() { // Referencias: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split  
  let myString = 'Vamos que vamos';
  let splits = myString.split(' ');
  return splits;
}
console.log(splitSentence());

// Desafio 4
function concatName(lassFirstArray) {
  return lassFirstArray[lassFirstArray.length -1] + ',' + lassFirstArray[0]; 
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// Desafio 5
function footballPoints(wins, ties) {
  let points = (3*wins)+ties;
  return points;
}
console.log(footballPoints(14,8));
// Desafio 6
function highestCount(numArray) {
  let maiorArray = 0;
  for(let index = 0; index < numArray.length; index += 1 ){
    if( numArray[index] > maiorArray) {     
      maiorArray = maiorArray + 1;  
    }   
  }
  return maiorArray;
}
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

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
