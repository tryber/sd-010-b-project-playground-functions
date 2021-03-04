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
function highestCount(numbersArray) {
  let maiorArray = 0;
  let calcRep = 0;
  for(let index = 0; index < numbersArray.length; index += 1 ){
    if( numbersArray[index] > maiorArray) {     
      maiorArray = numbersArray[index];  
    }   
  }
  for(let index2 = 0; index2 < numbersArray.length; index2 += 1) {
    if(numbersArray[index2] == maiorArray ) {
      calcRep += 1;
    }
  }
  return calcRep;
}
// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
 let distCat1 = Math.abs(mouse - cat1);
 let distCat2 = Math.abs(mouse - cat2);
 if (distCat1 < distCat2) {
   return 'cat1';
 } else if (distCat2 < distCat1) {
   return 'cat2';
 } else{
   return 'os gatos trombam e o rato foge';
 }
}
// Desafio 8
function fizzBuzz(numArray) {
  let resul = [];
  for(let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] % 3 === 0) {
      resul.push('fizz');
    } else if(numArray[index] % 5 === 0) {
      resul.push('buzz');
    } else if((numArray[index] % 3 === 0) && (numArray[index] % 5 === 0)) {
      resul.push('fizzBuzz');
    } else {
      resul.push('bug!');
    }
  }  
  return resul;
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
}
