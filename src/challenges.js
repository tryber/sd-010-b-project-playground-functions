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
function concatName(lista) {
  let concatenacao = `${lista[lista.length -1 ]}, ${lista[0]}`;
  return concatenacao;
}

//console.log(concatName(arrayprimeiro = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
//console.log(concatName(arraysegundo = ['foguete', 'não', 'tem', 'ré']));
//console.log(concatName(arrayterceiro = ['captain', 'my', 'captain']));

//console.log(concatName("Aderson Santos","da Silva"));

// Desafio 5
function footballPoints(vencer, empate) {
  return ((vencer * 3) + (empate * 1));
}

//console.log(footballPoints(14, 8));
//console.log(footballPoints(1, 2));
//console.log(footballPoints(0, 0));

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
