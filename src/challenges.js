// Desafio 1
function compareTrue(num1, num2) {
  if (num1 == true && num2 == true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let triangulo = base * height / 2;
  return triangulo; 
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  let word = "";
  for (let key in string) {
    if (string[key] != " ") {    
      word += string[key]
    } else if (string[key] == " "){
      arrayString.push(word);
      word = "";
    }   
  }  

  arrayString.push(word);
  return arrayString;
}

console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));


// Desafio 4
function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}` 
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = (wins * 3) + (ties * 1)
  return points
}

console.log(footballPoints(20, 10))

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
