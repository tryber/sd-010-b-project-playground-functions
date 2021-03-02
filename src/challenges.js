// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
} 
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));


// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(concatString) {
  let array = concatString.pop();
  return (array + ', ' + concatString[0]); 
}

console.log(concatName( ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0))

// Desafio 6
function highestCount(repeatM) {
  let maiorN = repeatM[0];
  let qMaior = 0;
  for (let i = 0; i < repeatM.length; i += 1) {
    if (repeatM[i] > maiorN) {
      qMaior = repeatM[i]
    }
  }
  for (let j = 0; j < repeatM.length; j += 1) {
    if (repeatM[j] === maiorN) {
      qMaior += 1;
    }
  }
  return qMaior;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) !== Math.abs(mouse - cat2)) {
    if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
      return 'cat1';
    }
    return 'cat2';
  }
  return ('os gatos trombam e o rato foge');
}
console.log(catAndMouse(2, 0, 3));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 0, 0));
//https://www.w3schools.com/js/js_math.asp

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
