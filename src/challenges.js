// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true) {
    return true;
  } else if (param1 === false && param2 === false) {
    return false
  } else {
    return false;
  }
}
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(" ");
  return array;
}
console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));

// Desafio 4
function concatName(arrayStrings) {
  let ultimoValor;
  let primeiroValor = 0;
  let words= "";

  ultimoValor = arrayStrings[arrayStrings.length -1];
  primeiroValor = arrayStrings[primeiroValor];
  words = `${ultimoValor}, ${primeiroValor}`;
  
  return words;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  let winPoints = 3;
  let tiePoints = 1;

  points = (wins * winPoints) + (ties * tiePoints);

  return points;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(arrayNumbers) {

}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 9, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado = "";
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;

  if(distanceCat1 < 0) {
    distanceCat1 = distanceCat1 * -1;
  }

  if(distanceCat2 < 0) {
    distanceCat2 = distanceCat2 * -1;
  }

  if(distanceCat1 > distanceCat2) {
    resultado = "cat2";
  } else {
    resultado = "cat1";
  }

  if(distanceCat1 === distanceCat2) {
    resultado = "os gatos trombam e o rato foge";
  }
  return resultado;
}

console.log(catAndMouse(10, 13, 8));
console.log(catAndMouse(10, 4, 22));
console.log(catAndMouse(10, 5, 15));

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
