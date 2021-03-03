// // Desafio 1
function compareTrue(boolean1, boolean2) {
 if(boolean1 = true && boolean2 = false){
  return false
 } 
}
console.log(compareTrue(false, true))
console.log(compareTrue(false, false))
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arraySentences = string.split(' ')
  return arraySentences  
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
// function concatName(string) {
//   let array = (concatName.length - 1) + concatName[0];
//   return array;
// }
// console.log(concatName('Lucas', 'Cassiano', 'Ferraz', 'Paolillo'))
// console.log(concatName('foguete', 'não', 'tem', 'ré'))
// console.log(concatName('captain', 'my', 'captain'))

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numero) {
  let numberEqual = 0;
  let higherNumber = 0;
  for (let key in numero) {
    if (numero[higherNumber] <= numero[key]){
      higherNumber = numero[key];
    }
  }
  for (let key2 in numero) {
    if (higherNumber === numero[key2]){
    numberEqual += 1
    }
  }
  return numberEqual
}
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

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
