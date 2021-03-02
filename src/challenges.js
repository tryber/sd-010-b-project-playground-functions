// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if(a && b) {
    return true;
    }else {
      return false;
  };
};
console.log(compareTrue(0,1));

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;
};
console.log(calcArea(2,5));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separador = string.split(' ')
  return separador;
}
console.log(splitSentence('Agora vai !!!'));

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let concatenacao = nomes[nomes.length - 1] + ', ' + nomes[0];
  return concatenacao;
};
console.log(concatName(['Thiago', 'Beatriz', 'Pedro', 'Barbára']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let pontos = 0;
  pontos += wins * 3; 
  pontos += ties;
  return pontos;
}
console.log(footballPoints(4, 2));

// Desafio 6
function highestCount(numArray) {
  // seu código aqui
  let counter = 0;
  let highestNum = 0;
  for (let key in numArray) {
    if (numArray[key] > highestNum) {
      highestNum = numArray[key];
    };
  };
  for (let key2 in numArray) {
    if (numArray[key2] === highestNum) {
      counter += 1;
    }; 
  };
  return counter;
}  
console.log(highestCount([9, 1, 10, 9, 9, 2, 3, 9, 5, 7]));

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
