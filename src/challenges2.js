// Desafio 10
function techList(nomesTecnologias, nome) {
  let nomesTecnologiasEmOrdem = nomesTecnologias.sort();
  let objeto = [];
    if (nomesTecnologias.length === 0) { //linha de comparação vista no código de vbodra https://github.com/tryber/sd-010-b-project-playground-functions/blob/vbodra-playground-functions/src/challenges2.js
    objeto = 'Vazio!';
  } else {
    for (let tecnologias of nomesTecnologiasEmOrdem) {
      objeto.push({
        tech: tecnologias,
        name: nome,
      });
    }
  }
  return objeto;
}

// Desafio 11

function tamanho(arrayDeNumeros) {
  let saida = `(${arrayDeNumeros[0]}${arrayDeNumeros[1]}) ${arrayDeNumeros[2]}${arrayDeNumeros[3]}${arrayDeNumeros[4]}${arrayDeNumeros[5]}${arrayDeNumeros[6]}-${arrayDeNumeros[7]}${arrayDeNumeros[8]}${arrayDeNumeros[9]}${arrayDeNumeros[10]}`;
  if (arrayDeNumeros.length !== 11) {
    saida = 'Array com tamanho incorreto.';
  }
  return saida;
}

function repeticaoDeTresOuMais(arrayDeNumeros) {
  let maisQueTres = false;
  let contagem = { };
  for (let itens of arrayDeNumeros) {
    contagem[itens] = 0;
  }
  for (let itens of arrayDeNumeros) {
    contagem[itens] += 1;
  }
  for (let itens of arrayDeNumeros) {
    if (contagem[itens] >= 3) {
      maisQueTres = true;
    }
  }
  return maisQueTres;
}

function generatePhoneNumber(arrayDeNumeros) {
  let saida = `(${arrayDeNumeros[0]}${arrayDeNumeros[1]})${arrayDeNumeros[2]}${arrayDeNumeros[3]}${arrayDeNumeros[4]}${arrayDeNumeros[5]}${arrayDeNumeros[6]}-${arrayDeNumeros[7]}${arrayDeNumeros[8]}${arrayDeNumeros[9]}${arrayDeNumeros[10]}`;
  saida = tamanho(arrayDeNumeros);
  for (let numero of arrayDeNumeros) {
    if ((numero < 0) || (numero > 9) || repeticaoDeTresOuMais(arrayDeNumeros)) {
      saida = 'não é possível gerar um número de telefone com esses valores.';
    }
  }
  return saida;
}

// Desafio 12
function priT (lineA, lineB, lineC) {
  let primeiro = ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC)));
  return primeiro;
}

function segT (lineA, lineB, lineC) {
  let segundo = ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC)));
  return segundo;
}

function terT (lineA, lineB, lineC) {
  let terceiro = (lineC < (lineB + lineA)) && ((lineC > Math.abs(lineB - lineA)));
  return terceiro;
}

function triangleCheck(lineA, lineB, lineC) {
  let a = lineA;
  let b = lineB;
  let c = lineC;
  let existencia = priT(a, b, c) || segT(a, b, c) || terT(a, b, c);
  return existencia;
}

// Desafio 13
function hydrate(frase) {
  let regex = /\d+/g;
  let numeros = frase.match(regex);
  let soma = 0;
  let saida = '';
  for (let index in numeros) {
    soma += parseInt(numeros[index], 10);
  }
  if (soma > 1) {
    saida = `${soma} copos de água`;
  } else {
    saida = `${soma} copo de água`;
  }
  return saida;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
