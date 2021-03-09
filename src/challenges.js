// Desafio 1
  function compareTrue(bool1, bool2) {
    if(bool1 === true && bool2 === true){
      return true
    } 
  else {
      return false
    }
  }
// Desafio 2
  function calcArea(base, heigth) {
    return (base * heigth) / 2
  }
// Desafio 3
  function splitSentence(string) {
    let separador = string.split(" ");
      return separador;
  }
// Desafio 4
function concatName(name) {
  return name[name.length-1] + ", " + name[0]
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
