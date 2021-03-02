// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2 ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(concatName) {
  return concatName[concatName.length - 1] + ', ' + concatName[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(parametro) {
  let higher = 0;
  let repeat = 0;

  for (let index = 0; index < parametro.length; index++) {
    if (parametro[index] >= higher) {
      higher = parametro[index];
    }
  }
  for (let index = 0; index < parametro.length; index++) {
    if (parametro[index] === higher) {
      repeat++;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  return cat1 - mouse < cat2 - mouse ? "cat1" : cat2 - mouse < cat1 - mouse ? "cat2" : "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(parametro) {
    let retorno = [];
    for (let index = 0; index < parametro.length; index++) {
      retorno.push(
        parametro[index] % 3 === 0 && parametro[index] % 5 === 0 ? "fizzBuzz" : 
        parametro[index] % 3 === 0 ? "fizz" : 
        parametro[index] % 5 === 0 ? "buzz" : "bug!"
      );
      
    }
    return retorno;
}

// Desafio 9
function encode(encode) {
  let retorno = encode;
  for (let index = 0; index < encode.length; index++) {
    retorno = retorno.replace("a", 1).replace("e", 2).replace("i", 3).replace("o", 4).replace("u", 5);    
  }
  return retorno;
}
function decode(decode) {
    let retorno = decode;
    for (let index = 0; index < decode.length; index++) {
    retorno = retorno.replace(1 , "a").replace(2, "e").replace(3, "i").replace(4, "o").replace(5, "u");    
  }
  return retorno;
}

console.log(decode("h3 th2r2!"));

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
