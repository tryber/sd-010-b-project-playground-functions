// Desafio 1
function compareTrue (x, y) {
  return x && y;
}

// Desafio 2
let calcArea = (base, heigth) => {
  return (base * heigth) / 2;
}

// Desafio 3
let splitSentence = (phrase) => {
  return phrase.split(' ');
}

// Desafio 4
  let concatName = (names) => {
    return `${names[names.length - 1]}, ${names[0]}`;
}

// Desafio 5
let footballPoints = (wins, ties) => {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount() {
  
}

// Desafio 7
function catAndMouse() {

}
  
// Desafio 8
let fizzBuzz = (numbers = []) => {
  for (let i = 0; i = numbers; i += 1)
  if (numbers % 3 === 0) {
    return "fizz";
  } else if (numbers % 5 === 0 ) {
    return "buzz";
  } else if ( numbers % 3 === 0 && numbers % 5 === 0) {
    return "fizzBuzz";
  } else {
    return "bug!";
  }    
}  
// Desafio 9
function encode() {
  
}
function decode() {
  
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
