// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 && valor2 == true){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let novaFrase = frase.splitSentence();
  return novaFrase;
}

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui

  let primeiroTermo = arrayStrings[0];
  let novoArray = arrayStrings.reverse();
  let ultimoTermo = novoArray[0];
  
  arrayConcatenado = [];
  arrayConcatenado.push(ultimoTermo,primeiroTermo);

  return console.log(arrayConcatenado);
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
