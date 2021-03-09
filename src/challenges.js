// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}
// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
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
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function highestCount(num) {
  let maior = Math.max.apply(null, num);
  let count = 0;
  for (let i = 0; i < num.length; i++){
    if (num[i] === maior) {
      count = count + 1;
    }
  }
    return count;
  }
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
    return 'os gatos trombam e o rato foge';
  } 
  else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(num) {
  let resultado = num.map((n) => {
  if (num % 3 === 0 && num % 5 === 0){
    return 'fizzBuzz';
  }
  if (num % 5 === 0){
    return 'buzz';
  }
  if (num % 3 === 0){
    return 'fizz';
  }
  return 'bug!';
});
  return resultado;
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
