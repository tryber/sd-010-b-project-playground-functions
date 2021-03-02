// Desafio 1
function compareTrue(bool1, bool2) {
  if(bool1 === true && bool2 === true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(anyString) {
  let array = [];
  let word = '';
  for(let index = 0; index < anyString.length; index +=1){
    if(anyString[index] === ' '){
      array.push(word);
      word = '';
    }else if(index == (anyString.length-1)){
      word = word + anyString[index];
      array.push(word);
    }else{
      word = word + anyString[index];
    }
  }
  return array;
}
let string = 'go Trybe';
console.log(splitSentence(string));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
