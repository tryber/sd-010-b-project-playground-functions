// Desafio 1
function compareTrue(boolean1,boolean2) {
  if(boolean1 && boolean2){
    return true;
  }else{
    return false;
  }
}

//console.log(compareTrue(true, true));
//console.log(compareTrue(false, true));
//console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, altura) {
  return ((base * altura) / 2);
}

//console.log(calcArea(10, 50));
//console.log(calcArea(5, 2));
//console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

//console.log(splitSentence("go Trybe"));
//console.log(splitSentence("vamo que vamo"));
//console.log(splitSentence("foguete"));

// Desafio 4
function concatName(nome1,nome2) {
  
  return nome1 + nome2;
}

//console.log(concatName("Aderson Santos","da Silva"));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
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
