// Desafio 1
function compareTrue(booleanValue1, booleanValue2) {
  // seu código aqui
  if (booleanValue1 === true && booleanValue2 === true){
    return true;
  }
  else{
    return false;
  }
}//console.log(compareTrue(false,false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base*height)/2;
}//console.log(calcArea(10,50));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ")
}//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  // seu código aqui
  return array[array.length - 1]+ ', ' + array[0];
}//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return 3*wins + ties;
}//console.log(footballPoints(14,8));

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let cont = 0;
  let maior = 0;
  for(let index=0; index < array.length; index++){
    if(array[index] > maior){
       maior = array[index];
    }
  }
  for(let index_1 in array){
    if(array[index_1] == maior){
        cont+= 1;
    }
  }
  return cont;
}//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if(Math.abs(mouse - cat1) > Math.abs(mouse - cat2)){
    return 'cat2'
  }
  else if(Math.abs(mouse - cat1) == Math.abs(mouse - cat2)){
    return "os gatos trombam e o rato foge"
  }
  else{
    return 'cat1'
  } 
}//console.log(catAndMouse(0,3,2));

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultado = [];
  for(let index in array){
    if(array[index]%3 == 0 && array[index]%5 == 0){
      resultado.push("fizzBuzz");
    }
    else if(array[index]%5 == 0){
      resultado.push("buzz");
    }
    else if(array[index]%3 == 0){
      resultado.push("fizz");
    }
    else{
      resultado.push("bug!");
    }
  }
  return resultado;
}//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  // seu código aqui
  let array = string.split('');
  for(let index in array){
    if(array[index] == 'a'){
      array[index] = '1';
    }
    if(array[index] == 'e'){
      array[index] = '2';
    }
    if(array[index] == 'i'){
      array[index] = '3';
    }
    if(array[index] == 'o'){
      array[index] = '4';
    }
    if(array[index] == 'u'){
      array[index] = '5';
    }
  }
  return array.join(''); 
}//console.log(encode("hi there!"));

function decode(string) {
  // seu código aqui
   // seu código aqui
   let array = string.split('');
   for(let index in array){
     if(array[index] == '1'){
       array[index] = 'a';
     }
     if(array[index] == '2'){
       array[index] = 'e';
     }
     if(array[index] == '3'){
       array[index] = 'i';
     }
     if(array[index] == '4'){
       array[index] = 'o';
     }
     if(array[index] == '5'){
       array[index] = 'u';
     }
   }
   return array.join(''); 
}//console.log(decode("h3 th2r2!"));

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
