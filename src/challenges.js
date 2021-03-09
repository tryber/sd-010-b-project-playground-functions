// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let c;
  if (a && b) {
    c = true;
  } else {
    c = false;
  }
  return c;
}
console.log(compareTrue(0, 1));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;
}
console.log(calcArea(2, 5));

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separador = string.split(' ');
  return separador;
}
console.log(splitSentence('Agora vai !!!'));

// Desafio 4
function concatName(nomes) {
  // seu código aqui
  let concatenacao = nomes[nomes.length - 1] + ', ' + nomes[0];
  return concatenacao;
}
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
    }
  }
  for (let key2 in numArray) {
    if (numArray[key2] === highestNum) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([9, 1, 10, 9, 9, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // Referência para o Math.abs, https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  let distanciaA = Math.abs(mouse - cat1);
  let distanciaB = Math.abs(mouse - cat2);
  let primeiroPegar;

  if (distanciaB < distanciaA) {
    primeiroPegar = 'cat2';
  } else if (distanciaA < distanciaB) {
    primeiroPegar = 'cat1';
  } else {
    primeiroPegar = 'os gatos trombam e o rato foge';
  }
  return primeiroPegar;
}

// Desafio 8
function fizzBuzz(armazernarEntra) {
  // seu código aqui
  let dadosSaida = [];
  for (let i = 0; i < armazernarEntra.length; i++){
    if (armazernarEntra[i] % 3 === 0 && armazernarEntra[i] % 5 !== 0) {
      dadosSaida.push('fizz');
    } else if (armazernarEntra[i] % 5 === 0 && armazernarEntra[i] % 3 !== 0) {
      dadosSaida.push('buzz');
    } else if (armazernarEntra[i] % 3 === 0 && armazernarEntra[i] % 5 === 0) {
      dadosSaida.push('fizzBuzz');  
    } else {
      dadosSaida.push('bug!');
    }
}
return dadosSaida;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));


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
