// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true){
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2
  return area;
}


// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let words = sentence.split(" ");
  return words;
}


// Desafio 4
function concatName(arrayNames) {
  // seu código aqui
  let firstName = arrayNames[0];
  let lastName = arrayNames[arrayNames.length -1];
  let fullName = lastName + ", " + firstName;
  return fullName;
}



// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let score = (wins * 3) + ties;
  return score;
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
