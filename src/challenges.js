// Desafio 1
function compareTrue(a, b) {
  if(a === true && b === true){
    return true 
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height / 2)
  return result
}

// Desafio 3
function splitSentence(palavra) {
  let separacao = palavra.split(' ')
  return separacao
}

// Desafio 4
function concatName(name) {
  let last = name[name.length-1];
  let first = name[0];
  let concatenation = last + ', ' + first;

  return concatenation
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 3;
  let tiePoints = 1;
  let parcialWinPoints = winPoints * wins;
  let parcialTiePoints = tiePoints * ties;
  let totalPoints = parcialWinPoints + parcialTiePoints;
  return totalPoints
}

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let count = 0;
  for(let index = 0; index < numbers.length; index++){
    if(numbers[index] > maior){
      maior = numbers[index]
    }
  }
  for(let increment = 0; increment < numbers.length; increment++){
    if(numbers[increment] === maior){
      count += 1
    }
  }
  return count
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
