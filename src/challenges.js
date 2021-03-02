// Desafio 1
function compareTrue(value1,value2) {
  let result = Boolean;
  if ((value1 == true) && (value2 == true)) {
     result = true;
  } else {
    result = false;
  }
  return result;
}
console.log(compareTrue(false,false))

// Desafio 2
function calcArea(base,height) {
  let area = base*height/2;
  return area; 
}
console.log(calcArea(51,1));

// Desafio 3 ==>>>>> Nao terminei essa ainda!!! Voltar nela!!!<<<<<<==
function splitSentence(string) {
  let arrayDeStrings = [];
  for (let i in string){
    if (string[i] == ' '){
      arrayDeStrings += ',';
    } else {
      arrayDeStrings += string[i];
    }
  } return arrayDeStrings;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  let ultimoItem = '';
  let primeiroItem = '';
  for (let i in array){
    primeiroItem = array[0];
    ultimoItem = array[i];
  }
  return ultimoItem +', ' + primeiroItem;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points = 3*wins + ties;
  return points;
}
console.log(footballPoints(0,0));

// Desafio 6
function highestCount(arrayOfValues) {
  let biggest = arrayOfValues[0];
  let sum = 0;
  for (let i in arrayOfValues) {
    if( arrayOfValues[i] >= biggest){
      biggest = arrayOfValues[i];
    }
  }
  for (let counter in arrayOfValues){
    if (arrayOfValues[counter] == biggest){
      sum += 1;
    }
  }
  return sum;
}
console.log(highestCount([0, 0, 0]));

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
