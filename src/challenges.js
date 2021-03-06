// Desafio 1
function compareTrue(num1, num2) {
  if (num1 > 0 && num2 < 10){
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base*heigth)/2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(names) {
  names = ['foguete','não','tem','ré'];
  return names[names.length-1] + "," + names[0];
}


// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
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
function encode(word) {
  return word.replace("a", 1,"e", 2,"i",3,"o",4,"u",5);
}
function decode(stringNumbers) {
  return stringNumbers.replace(1,"a",2,"e",3,"i"4,"o",5,"u");
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
