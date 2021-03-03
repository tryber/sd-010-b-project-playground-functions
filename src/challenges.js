// Desafio 1
function compareTrue(num1, num2) {
  // seu código aquiaa
  if((num1===true) && (num2===true)){
    return true;
  }else
  return false;
}



// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

//split divide frase
// Desafio 3
function splitSentence(Strings) {
  return Strings.split(" ");
}


// Desafio 4
function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins *3 + ties *1;
}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let maior = 0;
  for (let indice = 0; indice < array.length; indice += 1) {
    for (let comparar = 0; comparar < array.length; comparar += 1) {
      if (maior < array[comparar]) {
          maior = array[comparar];
      }
      if (maior === array[indice])
        return count += 1;


    }
  }
  return count;



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
}
