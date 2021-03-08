// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
if (valor1 === true && valor2 === true) {
  return true;
}
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areatriangulo;
  areatriangulo = (base * height) / 2;
  return areatriangulo;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let array = frase.split(" ");
  return array;
}

// Desafio 4
function concatName(matrix) {
  // seu código aqui
let primeiroNome = matrix[0];
let ultimoNome = matrix[matrix.length - 1];
let resultado = ultimoNome + ", " + primeiroNome;
  
 return resultado;
  
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontuacao;
  pontuacao = (wins * 3 + ties * 1);
  return pontuacao;
}

// Desafio 6
function highestCount(telefone) {
  // seu código aqui
  let maiorNumero;
  let soma;
  for (let index = 0; index < telefone.length; index += 1 ) {
    if (telefone[index] > maiorNumero) {
      maiorNumero = telefone[index];
    }
  }
  for (let index = 0; index < telefone.length; index += 1 ) {
    if (maiorNumero === telefone[index]) {
        soma += 1;
    }
   }
return soma;

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
let valor;
let distancia1 = (mouse - cat1);
let distancia2 = (mouse - cat2);
if (distancia1 > distancia2) {
  valor = 'cat2';
}
else if (distancia1 < distancia2) {
  valor = 'cat1';
}
else if (distancia1 === distancia2) {
  valor = 'os gatos trombam e o rato foge';
}
  return valor;
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
