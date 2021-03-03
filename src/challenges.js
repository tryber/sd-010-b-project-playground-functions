// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
     return (a===b && b===a);
   
  }
let d = compareTrue(true,false);
console.log(d);

// Desafio 2
function calcArea(base,heigth) {
  // seu código aqui
  return (base*heigth)/2;
}
console.log(calcArea(51,1));

// Desafio 3
function splitSentence(arryNames) {
  // seu código aqui
return arryNames.split('/');
}
console.log(splitSentence("go/trybe"));

// Desafio 4
function concatName(arrNames) {
  // seu código aqui
  let arryNames=['captain', 'my', 'captain'];
  let result= arryNames.concat();
  return arrNames;
}
console.log(concatName('captain, captain' ));
// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
