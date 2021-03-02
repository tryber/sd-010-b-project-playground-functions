// Desafio 1
function compareTrue(a, b) {
  if (a==true && b==true) return true;
  else return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(palavra) {
  resultado = palavra.split(" ");
  return resultado;
}

// Desafio 4
function concatName(array) {
  // let name = array.concat(array[])
  let ultimo = array[array.length-1] + ', ';
  let primeiro = array[0];
  // console.log(`${array[array.length-1]}, ${array[0]}`);
  return ultimo + primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  for(let i = 1; i < array.length; i++){
    if(array[i] > maior) maior = array[i];
  }
  let count = 0;
  for(let j = 0; j < array.length; j++){
    if(array[j] == maior) count++;
  }
  return count;
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
