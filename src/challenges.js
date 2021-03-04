// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
 let fraseSeparada = frase.split(" ");
 return fraseSeparada;
}

// Desafio 4
function concatName(array) {
  let last = array[array.length-1];
  let first = array[0];
  let full = last + ', ' + first;
  return full;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
 let cont = 0;
 let maiorNumero = 0;
 for (let index in numeros){
   if(numeros[index] > maiorNumero){
     maiorNumero = numeros[index];
   }
 }
 for (let index in numeros){
  if (maiorNumero == numeros[index]){
    cont += 1;
  }
 }
 return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let absCat1 = Math.abs(cat1 - mouse); //fonte de pesquisa: https://www.w3schools.com/jsref/jsref_abs.asp
  let absCat2 = Math.abs(cat2 - mouse);

  if (absCat1 == absCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (absCat1 < absCat2){
    return 'cat1';
  } else{
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzz = [];
  for (let index in array) {
    if ((array[index] % 3 == 0) && (array[index] % 5 == 0) ) {
      fizzBuzz.push('fizzBuzz'); 
    } else if ((array[index] % 3 == 0) && (array[index] % 5 != 0)) {
      fizzBuzz.push('fizz');
    } else if ((array[index] % 5 == 0) && (array[index] % 3 != 0)) {
      fizzBuzz.push('buzz');
    } else {
      fizzBuzz.push('bug!');
    }
  }
  return fizzBuzz;
}

// Desafio 9
function encode(array) {
  let encodeFrase = '';
  
  for (let index = 0; index < array.length; index += 1){
    if (array[index] === 'a') {
      encodeFrase += 1;
    } else if (array[index] === 'e') {
      encodeFrase += 2;
    } else if (array[index] === 'i') {
      encodeFrase += 3;
    } else if (array[index] === 'o') {
      encodeFrase += 4;
    } else if (array[index] === 'u') {
      encodeFrase += 5;
    } else {
      encodeFrase += array[index];
    }
  }
  return encodeFrase;
}


function decode(array) {
  let decodeFrase = '';
  
  for (let index = 0; index < array.length; index += 1){
    if (array[index] === '1') {
      decodeFrase += 'a';
    } else if (array[index] === '2') {
      decodeFrase += 'e';
    } else if (array[index] === '3') {
      decodeFrase += 'i';
    } else if (array[index] === '4') {
      decodeFrase += 'o';
    } else if (array[index] === '5') {
      decodeFrase += 'u';
    } else {
      decodeFrase += array[index];
    }
  }
  return decodeFrase;
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
