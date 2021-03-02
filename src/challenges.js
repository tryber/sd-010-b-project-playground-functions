// Desafio 1
function compareTrue(numeroImpar1, numeroImpar2) {
  if (numeroImpar1 % 2 != 0 && numeroImpar2 % 2 != 0) {
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = 0;
  triangulo = ((base * height) / 2);

  return triangulo;
}



// Desafio 3
function splitSentence(frase) {
  let array = [];
  for(let key in frase){
   array.push(frase[key]);
  }
  return array;
}

console.log(splitSentence("O mar é azul"));


// Desafio 4
function concatName(variavel) {
  let resultado = "";
  resultado = variavel[variavel.length -1] + ", " + variavel[0];

  return resultado;
}


// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos = (3 * wins + 1 * ties);

  return pontos;  
}

// Desafio 6
function highestCount(n) {
  let numeroMaior = 0;
  let contador = 0;
  for(let i = 0; i < n.length; i += 1){
    if (n[i] >= numeroMaior){
      numeroMaior = n[i];
    }
  }
  
  for(let i = 0; i < n.length; i += 1){
    if(numeroMaior == n[i]){
      contador += 1;
    } 
  }
  return contador;
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
