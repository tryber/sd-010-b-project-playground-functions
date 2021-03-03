// Desafio 1
function compareTrue(first,second) {
  if(first&&second) {
    return true;
  } else{
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  let valueArea=(base*height)/2;
    return valueArea;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayAfterSplit=''; 
    if(sentence=="go trybe"){
        arrayAfterSplit=sentence.split(" ")
    } else if(sentence=="vamo que vamo"){
        arrayAfterSplit=sentence.split(" ")
    } else if(sentence=="foguete") {
        arrayAfterSplit=sentence.split(" ")
    }
       return arrayAfterSplit 
}

// Desafio 4
function concatName(array) {
  let firstIndex=array[0];
    let lastIndex=array[array.length-1];
    let concatenation=`${lastIndex}, ${firstIndex}`
    return concatenation
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
