// Desafio 1
function compareTrue(firstName, midleName) {
  // seu código aqui
  if(firstName == true && midleName == true){
    return true;
  }else{
    return false;
  }
}
//  console.log(compareTrue(true, true))
  
 
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}
//  console.log(calcArea(51,1));


  // Desafio 3
function splitSentence(phrase) {
  // seu código aqui
    let phrases = phrase;
    return phrases.split(" ");
  }  

console.log(splitSentence("he he he kkk kkk kkk"));
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
