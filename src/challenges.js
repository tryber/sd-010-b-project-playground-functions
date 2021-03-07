// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
    return false;
}
// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
// seu código aqui
}

// Desafio 3
function splitSentence(string) {
  var result = string.split(" ")
  return result;
// seu código aqui
}

// Desafio 4
function concatName(stringName) {
    return stringName[stringName.length-1] +", " +stringName[0];
}
let stringName = ['foguete', 'não', 'tem', 'ré']
console.log(concatName(stringName));
    

// Desafio 5
function footballPoints(wins, ties) {
  var pontos = ((wins*3) + ( ties*1));
  return pontos;
// seu código aqui
}

// Desafio 6
function highestCount(values) {
  let higher = 0;
  let acres =0;
  for ( let num in values){
    if (values[num] > higher){
      higher = values[num]
   
    }
    }

}
console.log(highestCount([2,3,5,9]));
  
// Desafio 7
function catAndMouse(mouse,cat1, cat2) {
  let catnumber1 = Math.abs(mouse-cat1);
  let catnumber2 = Math.abs(mouse -cat2);
  if (catnumber1 < catnumber2){
    return "cat1"
  } else if (catnumber2 < catnumber1){
    return "cat2"
  }else{
    return "Os gatos trombam e o rato foge"
  }
}
console.log(catAndMouse(3 ,4, 4));
// Desafio 8
function fizzBuzz(array) {
  for (let index in array){
    if ( array[index] % 3 == 0){
    }return "fizz" 
    }
   
  }
console.log(fizzBuzz([2,15,7,9,45]));
  
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
console.log(compareTrue( true, false));
console.log(calcArea(5, 2));
console.log(splitSentence("go trybe"));

console.log(footballPoints(0,0));
