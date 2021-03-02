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
  return [array.length-1, 0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3, ties*1)
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 < cat2){
    return cat1;
  } else if (cat1 > cat2 ) {
      return cat2
  } else { return "os gatos trombam e o rato foge"}

}

// Desafio 8
function fizzBuzz() {
  for (index = 0; index < fizzBuzz.length; index =+1){
    if (fizzBuzz[index] % 3 ==0) {
      return "fizz"
    } else if (fizzBuzz[index] % 5 === 0) {
      return "buzz"
    } else if (fizzBuzz[index] % 5 === 0 && fizzBuzz[index] % 3 === 0) {
      return "fizzBuzz"
    } else {
      return "bug!"
    }
  }
}

// Desafio 9
function encode( {
  

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
