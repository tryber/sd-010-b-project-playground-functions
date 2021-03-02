// Abimael Rocha - T10 Tribo B
// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height)/2);
}

// Desafio 3
function splitSentence(sentence) {
  let name = "";
  let result = "";
  for (let index = 0; index < sentence.length; index++){
    if(sentence[index] === " "){
      
      result.push(name);
      name = "";
      continue;
    }
    name += sentence[index];
  }
  result.push(name);
  return result;
}

// Desafio 4
function concatName(names) {
  let result = "";
  result += names[names.length - 1] + ", ";
  result += names[0];

  return result;
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;

  return points;
}
// Desafio 6
function highestCount(array) {
  let max = array[0];
  let nVezes = 0;
  //Verificar qual maior número
  for(let key in array){
    if(array[key+1] >= max){
      max = array[key+1];
    }
  }
  
  for(let key in array)
    if(array[key] === max) nVezes++;

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
