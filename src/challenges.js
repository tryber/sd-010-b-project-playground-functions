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
  let novaFrase = frase.split(" ");
  return novaFrase;
}


// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui

  let primeiroTermo = arrayStrings[0];
  let novoArray = arrayStrings.reverse();
  let ultimoTermo = novoArray[0];
  
  let arrayConcatenado = [];
  arrayConcatenado.push(ultimoTermo,primeiroTermo);

  return arrayConcatenado;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontosTotais = (wins * 3) + (ties * 1);
  
  return pontosTotais;
}

// Desafio 6
function highestCount(arrayNumeros) {
  // seu código aqui
  let maiorNumero = 0;
  let repeticao = 0;

  for (let indice = 0; indice < arrayNumeros.length; indice++) {
    if(arrayNumeros[indice] > maiorNumero){
      maiorNumero = arrayNumeros[indice];
    }
  }

  for (let indice = 0; indice < arrayNumeros.length; indice++) {
    if(arrayNumeros[indice] == maiorNumero){
      repeticao++;
    }
  }

  return repeticao;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(mouse, cat1, cat2) {
  // seu código aqui
  let mouseCat1 = 0;
  let mouseCat2 = 0;

  if(mouse > cat1){
    mouseCat1 = mouse - cat1;
  }else{
    mouseCat1 = cat1 - mouse;
  }

  if(mouse > cat2){
    mouseCat2 = mouse - cat2;
  }else{
    mouseCat2 = cat2 - mouse;
  }

  if(mouseCat1 > mouseCat2){
    return mouseCat1;
  }else{
    return mouseCat2;
  }
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
