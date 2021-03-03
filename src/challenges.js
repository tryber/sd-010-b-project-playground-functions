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

  let absCat1 = Math.abs(cat1 - mouse);
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
    } else if (array[index] % 3 == 0 ) {
      fizzBuzz.push('fizz');
    } else if (array[index] % 5 == 0 ) {
      fizzBuzz.push('buzz');
    } else {
      fizzBuzz.push('bug');
    }
  }
  return fizzBuzz;
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
