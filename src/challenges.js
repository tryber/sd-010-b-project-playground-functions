// Desafio 1
function compareTrue(x, y) {
  return x && y;
}


////////////////////////////////////////////////////////////////////////////////////
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}


/////////////////////////////////////////////////////////////////////////////////////
// Desafio 3
function splitSentence(frase) {
  for  ( let  index  =  0 ;  index  <  frase . length ;  index ++ )  {
    arrayString  =  frase . split (  ) ;
  }
 return  arrayString ;
}
console . log ( splitSentence ( "go Trybe" ) )

/////////////////////////////////////////////////////////////////////////////////////
// Desafio 4
function concatName(array) {
  let resultado  =  array [ array . lenth - 1 ]  +  ','  +  matriz [ 0 ] ;
  return resultado;
}

//////////////////////////////////////////////////////////////////////////////////////
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
