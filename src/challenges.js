// Desafio 1
function compareTrue(a, b) {
  if (a && b === true){
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
    return area
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
    return array;
}

// Desafio 4
function concatName(array) {
  let ultimoItem = array[array.length - 1];
  let primeiroItem = array[0];
  let final = ultimoItem + ', ' + primeiroItem;

  return final;
}

console.log()
// Desafio 5
function footballPoints(wins, ties) {
   let vitorias = wins * 3;
   let empates = ties;
   let pontos = vitorias + empates;

   return pontos;
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
function fizzBuzz(array) {
  let arrayFinal = [];
  for (let i = 0; i < array.length; i++){
      if(array[i] % 3 === 0 && array[i] % 5 === 0){
       arrayFinal.push('fizzbuzz');
   } else if (array[i] % 5 === 0) {
       arrayFinal.push('buzz');
   } else if (array[i] % 3 === 0) {
       arrayFinal.push('fizz');
   } else {
       arrayFinal.push('bug!');
   }
 }
  return arrayFinal;
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
