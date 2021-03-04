// Desafio 1
function compareTrue(idade) {
  if (idade < 30 && idade < 40) {
    console.log('True');
  } else {
    console.log('False');
  }
}
compareTrue(27);

// Desafio 2
function calcArea(base, height) {
  console.log([base * height] / 2);
}
calcArea(10, 50);

// Desafio 3
function splitSentence() {
  console.log(['vamo', 'que', 'vamo']);
}
splitSentence();

// Desafio 4
function concatName() {
  let listaNomes = ['foguete', 'não', 'tem', 'ré'];
  console.log(listaNomes[3] + ',' + listaNomes[0]);
}
concatName();

// Desafio 5
function footballPoints(wins, ties) {
  console.log(wins * 3 + ties * 1);
}
footballPoints(1, 2);

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
