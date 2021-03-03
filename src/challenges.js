// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } else{
    return false;
  }
}
// Desafio 2
function calcArea(base, altura) {
  let calcArea = (base * altura) / 2;
  return calcArea;  
}
// Desafio 3
function splitSentence(myString) { // Referencias: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split;
  let splits = myString.split(' ');
  return splits;
}
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
