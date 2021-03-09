// Desafio 1
function compareTrue(param1, param2) {
  if (param1 == true && param2 == true){
   return true
  }
  else {
    return false
  }
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
 let area = (base * height) / 2;
 return area;
}


// Desafio 3
function splitSentence() {
  let str = "Coisa dificil gente";
  let res = str.split(" ");
  console.log(res);
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
