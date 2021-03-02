// Desafio 1
function compareTrue() {
  // seu código aqui teste
}

// Desafio 2
function calcArea(base, height) {
  
  return (base*height)/2;
}

// Desafio 3
function splitSentence(word) {
 let arrayWord = word.split(" ");
 return arrayWord
} //https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254

// Desafio 4
function concatName(array) {
  return array[array.length-1] + " " + array[0]
  
  }

//recebi a ajuda dos colegas durante o breakout room para colocar os "[]" para descobrir o primeiro elemento

// Desafio 5
function footballPoints(wins, ties) {
  let victoriesPoints = wins*3
  let tiesPoints = ties
  return victoriesPoints + tiesPoints
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1";
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse) ) {
      return "cat2"
  } else { return "os gatos trombam e o rato foge"}
//após a dica de valor absoluto dada nas instruções do README do projeto
}


// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index =+1){
    if (array[index] % 3 ==0) {
      return "fizz"
    } else if (array[index] % 5 === 0) {
      return "buzz"
    } else if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      return "fizzBuzz"
    } else {
      return "bug!"
    }
  }
}
console.log(fizzBuzz(5,7,15,21,23))
// Desafio 9
function encode( ) {
  
}
  

function decode () {
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
