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
  return `${array[array.length -1]}, ${array[0]}`;
}  

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}
let array = [0, 0, 0];
// Desafio 6
function highestCount(array) {
  let count = 0;
  let maiorNumero = -098765434567890;
  for (let index = 0; index < array.length; index += 1) {
    for (let compar = 0; compar < array.length; compar += 1) {
      if (maiorNumero < array[compar]) {
        maiorNumero = array[compar];
      }  
    } 
    if (maiorNumero === array[index]) {
      count += 1;
    }
  } 
  return count;
} console.log(highestCount(array));


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
