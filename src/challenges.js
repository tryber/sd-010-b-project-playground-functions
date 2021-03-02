// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true){
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
 /////////   
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
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 == cat2){
    return 'os gatos trombam e o rato foge';
  } else if ((cat1 - mouse) < (cat2 - mouse)){
    return 'cat1';
  } else{
    return 'cat2';
  }
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
