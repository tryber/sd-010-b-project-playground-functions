// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}
console.log (compareTrue(false, true));
console.log (compareTrue(false, false));
console.log (compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) /2;
}
console.log (calcArea(10, 50));
console.log (calcArea(5, 2));
console.log (calcArea(51, 1));

// Desafio 3
function splitSentence(words) {
  let separeted = words.split(" ");
    return separeted;
}
console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(lastFirst) {
  return lastFirst[lastFirst.length -1] + ", " + lastFirst[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highest = ;

  for (let num of numbers) {
    if (num === highest) {
      count += 1;
    }
  }

  return count;
}
console.log(highestCount[9, 1, 2, 3, 9, 5, 7]);
console.log(highestCount[0, 4, 4, 4, 9, 2, 1]);
console.log(highestCount[0, 0, 0]);


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
