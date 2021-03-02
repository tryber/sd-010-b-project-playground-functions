// Desafio 1
function compareTrue(para1, para2) {
  if (para1 == true && para2 == true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}
console.log(calcArea(51, 1))

// Desafio 3
function splitSentence(array) {
  array = array.split(" ");
  return array;
}
console.log(splitSentence("vamo que vamo"))

// Desafio 4
function concatName(string) {
  let nomes = string[string.length - 1] + ", " + string[0];
  return nomes;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + ties;
  return resultado;
}
console.log(footballPoints(0, 0))

// Desafio 6
function highestCount(valores) {
  for (let iArray = 0; iArray < valores.length; iArray += 1) {
    let repete = 0
    for (let indexArray = 0; indexArray < valores.length; indexArray += 1) {
      if (valores[iArray] === valores[indexArray]) {
        return repete += 1
      }
    }
  }
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = mouse - cat1;
  let gato2 = mouse - cat2;
  if (gato1 > gato2) {
    return 'cat1'
  }
  else if (gato1 < gato2) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(0,12,12))

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
