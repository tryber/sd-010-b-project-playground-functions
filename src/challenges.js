// Desafio 1
function compareTrue(var1, var2) {
  let var3;
  if (var1 && var2) {
    var3 = true;
  } else {
    var3 = false;
  }
  return var3;
}

// Desafio 2
function calcArea(base, height) {
  return(base * height / 2;)
}

// Desafio 3
function splitSentence(text) {
  let word = [""];
  let wordCount = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] != " ") {
      word[wordCount] = word[wordCount] + text[i];
    } else {
      word.push("");
      wordCount++;
    }
  }
  return word;
}

// Desafio 4
function concatName(array) {
  let string = array[array.length-1] + ", " + array[0];
  return string;
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
