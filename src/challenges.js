// Desafio 1
function compareTrue(v1, v2) {
  return v1 === true && v2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  return arr[arr.length - 1] + ', ' + arr[0];
}

// Desafio 5
function footballPoints(W,T) {
  return W *3 + T;
}

// Desafio 6
function highestCount(num) {
  let high = Math.max.apply(null,  num);
  let count = 0;
  for(let i = 0; i < num.length; i++){
    if(num[i] === high){
      count++;
    }
  }
  return count;
}
// Fonte da função utilizada para retornar a variavel high --- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
    return 'os gatos trombam e o rato foge';
  } 
  else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  else {
    return 'cat2';
  }
}
// Fonte da função utilizada para retornar valores absolutos --- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

// Desafio 8

function fizzBuzz(num) {
  let resultado = num.map((n) => {
  if (n % 3 === 0 && num % 5 === 0){
    return 'fizzBuzz';
  }
  else if (n % 5 === 0){
    return 'buzz';
  }
  else if (n % 3 === 0){
    return 'fizz';
  }
  else{
    return 'bug!';
  }
});
  return resultado;
}
// Fonte da função utilizada para retornar o novo array --- https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map

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
