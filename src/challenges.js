// Desafio 1
function compareTrue(boo1, boo2) {
  if (boo1 === true && boo2 === true) {
    return true;
  } 
  else {
    return false;
  }
} 

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} 

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
} 

// Desafio 4
function concatName(array) {
  return `${array[0]}, ${array[array.length -1]}`;
}  

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}
let array = [9, 3, 5, 6, 8, 9, 4, 3, 9];
// Desafio 6
function highestCount(array) {
  let count = 0;
  let compar = 0;
  let vezes = 0;
  for (let index = 0; index < array.length; index += 1) {
    for (let compare = 0; compare < array.length; compare += 1){
      if (array[index] === array[compare]) {
        count = array[index];
        vezes += 1;
      }
    if (array[index] === array[compare]) {
      count = array[index];
    }
  } return count;
} console.log(highestCount(array));
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
