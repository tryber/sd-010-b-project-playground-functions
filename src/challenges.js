// Desafio 1
function compareTrue(cond1, cond2) {
  let condicao;
  if (cond1 === true && cond2 === true) {
    condicao = true;
  } else {
    condicao = false;
  }
  return condicao;
}

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2);
  return area;
}

// Desafio 3
function splitSentence(string) {
  let frase = string.split(' ');
  return frase;
}

// Desafio 4
function concatName(listaNomes) {
  let conc = (listaNomes[listaNomes.length - 1] + ', ' + listaNomes[0]);
  return conc;
}
let listaNomes = [];
console.log(concatName(listaNomes));

// Desafio 5
function footballPoints(wins, ties) {
  let pontuacao = ((wins * 3) + ties);
  return pontuacao;
}
console.log(footballPoints());

// Desafio 6
function highestCount(numeros) {
  numeros.sort();
  let contador = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] >= numeros[numeros.length - 1]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  if ((Math.abs(mouse - cat1)) < (Math.abs(mouse - cat2))) {
    resultado = 'cat1';
  } else if ((Math.abs(mouse - cat1)) > (Math.abs(mouse - cat2))) {
    resultado = 'cat2';
  } else {
    resultado = 'os gatos trombam e o rato foge';
  }
  return resultado;
}

// Desafio 8
function fizzBuzz(numeros) {
  let listaArray = [];
  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      listaArray.push('fizzBuzz');
    } else if (numeros[i] % 5 === 0) {
      listaArray.push('buzz');
    } else if (numeros[i] % 3 === 0) {
      listaArray.push('fizz');
    } else (listaArray.push('bug!'));
  }
  return listaArray;
}
// console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(mensagem) {
  let codigo = [];
  for (let i = 0; i < mensagem.length; i +=1) {
    if (mensagem[i] === 'a') {
      codigo.push('1');
    } else if (mensagem[i] === 'e') {
      codigo.push('2');
    } else if (mensagem[i] === 'i') {
      codigo.push('3');
    } else if (mensagem[i] === 'o') {
      codigo.push('4');
    } else if (mensagem[i] === 'u') {
      codigo.push('5');
    } else {
      (codigo.push(mensagem[i]))
    }
  }
//  return codigo;
  let mensagemCod = '';
  for (let j = 0; j < codigo.length; j += 1) {
    mensagemCod = mensagemCod += codigo[j];
  }
  return mensagemCod;
}
// console.log(encode('cheira minha virilha'));

function decode(mensagem) {
  let codigo = [];
  for (let i = 0; i < mensagem.length; i +=1) {
    if (mensagem[i] === '1') {
      codigo.push('a');
    } else if (mensagem[i] === '2') {
      codigo.push('e');
    } else if (mensagem[i] === '3') {
      codigo.push('i');
    } else if (mensagem[i] === '4') {
      codigo.push('o');
    } else if (mensagem[i] === '5') {
      codigo.push('u');
    } else {
      (codigo.push(mensagem[i]))
    }
  }
  let mensagemCod = '';
  for (let j = 0; j < codigo.length; j += 1) {
    mensagemCod = mensagemCod += codigo[j];
  }
  return mensagemCod;
}
// console.log(decode('ch23r1 m3nh1 v3r3lh1'));

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
