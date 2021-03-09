// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  } 
}
// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}
// Desafio 3
function splitSentence(string) {
  return string.split(" "); 
}
// Desafio 4
function concatName(name) {
  return name[name.length - 1] + ', ' + name[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(num) {
let maior = count = 0;
for (let c = 0; c < num.length; c++){
  if (num[c] > maior){
    maior = num[c]; 
  }
  else if (num[c] == maior){
    count++;
  }
  console.log(count);
}
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let retorno = '';
  if ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) {
    retorno = 'os gatos trombam e o rato foge';
  } else if ((cat1 - mouse) < (cat2 - mouse)) {
    retorno = 'cat1';
  } else if ((cat1 - mouse) > (cat2 - mouse)) {
    retorno = 'cat2';
  }
  return retorno;
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
}