// Desafio 1
function compareTrue(a, b) {
  if(a === true && b === true){
    console.log(true)
  } else {
    console.log(false)
  }
}
compareTrue(false, true)
compareTrue(false, false)
compareTrue(true, true)


// Desafio 2
function calcArea(base, height) {
  let result = (base * height / 2)
  console.log(result)
}
calcArea(10, 50)
calcArea(5, 2)
calcArea(51, 1)


// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

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
