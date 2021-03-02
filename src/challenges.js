// Desafio 1
function compareTrue(bool1,bool2) {
  if(bool1 === bool2){
    bool3 = true;
  }else{
    bool3 = false;
  }
  console.log(bool3);
}

compareTrue(-0,-0);

// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(nome1,nome2) {
  let nome3 = "";
  nome3 = nome1 + " " + nome2;
  console.log(nome3);
}

//concatName("Aderson Santos","da Silva");

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins*3)+ties;
  return pontos;
}

//console.log(footballPoints(1,8));

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
