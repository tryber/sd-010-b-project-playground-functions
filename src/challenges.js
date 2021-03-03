// Desafio 1
function compareTrue(boolean1, boolean2) {
  let bolfalse = false;
  if (boolean1 === true && boolean2 === true) {
    bolfalse = true;
  }
  return bolfalse;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(frase) {
  let palavras = frase.split(' ');
  return palavras;
}
// Desafio 4
function concatName(array) {
  const concatenated = `${array[(array.length - 1)]}, ${array[0]}`;

  return concatenated;
}
// Desafio 5
function footballPoints(wins, ties) {
  const totalpoints = (wins * 3) + ties;

  return totalpoints;
}
// Desafio 6
function highestCount(arrayDeNumeros) {
  let contagem = { };
  let maiorNumero = 0;
  for (let itens of arrayDeNumeros) {
    contagem[itens] = 0;
  }
  for (let itens of arrayDeNumeros) {
    contagem[itens] += 1;
  }
  for (let itens in arrayDeNumeros) {
    if (itens > maiorNumero) {
      itens = maiorNumero;
    }
  }
  return contagem[maiorNumero];
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if ((Math.abs(mouse - cat1) > Math.abs(mouse - cat2))) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function  fizzBuzz ( arrayDeNumeros )  {
  let  resposta  =  [ ] ;
  for  ( let  index  =  0 ;  index  <  arrayDeNumeros . length ;  index  + =  1 )  {
    if  ( ( arrayDeNumeros [ index ] % 3  ===  0 )  &&  ( arrayDeNumeros [ index ] % 5  ===  0 ) ) {
      RESPOSTA . push ( 'fizzbuzz' ) ;
    }
    else  if  ( arrayDeNumeros [ index ] % 3  ===  0 ) {
      RESPOSTA . empurre ( 'fizz' ) ;
    }
    else  if  ( arrayDeNumeros [ index ] % 5  ===  0 ) {
      RESPOSTA . push ( 'zumbido' ) ;
    }
    else  {
      RESPOSTA . push ( 'bug!' ) ;
    }
  }
  retorno  resposta ;
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
