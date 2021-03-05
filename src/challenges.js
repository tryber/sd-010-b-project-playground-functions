// Desafio 1
let pizzaIsGood = true;
let hamburguerIsGood = true;
let chocolatePizzaIsGood = false;
function compareTrue(parameter1, parameter2) {
  if (parameter1 && parameter2 == true) {
    return true;
  }
  else {
    return false;
  }
}console.log(compareTrue(pizzaIsGood, chocolatePizzaIsGood))
console.log('----------------------------------------------')

// Desafio 2
function calcArea(base, height) {
  let area = base * height / 2
  return area
}
console.log(calcArea(10, 50))
console.log('----------------------------------------')

// Desafio 3
function splitSentence(parameter) {
  let array = parameter.split(' ')
  return array
}
console.log(splitSentence("vamo que vamo"))
console.log('-------------------------------------------')
// Desafio 4
function concatName(parameter) {
  
  let concaString = parameter[parameter.length-1] + ', ' + parameter[0]
  return concaString
}
console.log(concatName(['foguete', 'não', 'tem', 'ré']))

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
