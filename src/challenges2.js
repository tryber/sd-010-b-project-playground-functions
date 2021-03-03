// Desafio 10
function techList(tech, name) {
  let novaArray = tech.sort();
  let objeto = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < novaArray.length; i += 1) {
    objeto[i] = {
      tech: novaArray[i],
      name: name,
    };
  }
  return objeto;
}

// Desafio 11
function contaNumRepetido(array) {
  let num = {};
  let contaRepetido = 0;
  for (let i = 0; i < array.length; i += 1) {
    let valor = array[i];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] += 1;
    }
  }
  for (let prop in num) {
    if (contaRepetido < num[prop]) {
      contaRepetido = num[prop];
    }
  }
  return contaRepetido;
}
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] < 0) || (array[i] > 9 || (contaNumRepetido(array) >= 3))) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let telefoneDDD = '(' + array[0] + array[1] + ')';
  let telefoneParteUm = '' + array[2] + array[3] + array[4] + array[5] + array[6];
  let telefoneParteDois = '' + array[7] + array[8] + array[9] + array[10];
  let numTelefone = telefoneDDD + ' ' + telefoneParteUm + '-' + telefoneParteDois;
  return numTelefone;
} 

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let trianguloPossivel;
  let condicao1 = (lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC));
  let condicao2 = (lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC));
  let condicao3 = (lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB));
  if (condicao1 && condicao2 && condicao3) {
    trianguloPossivel = true;
  } else {
    trianguloPossivel = false;
  }
  return trianguloPossivel;
}

// Desafio 13
// Regex - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions
// ParseInt - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function hydrate(string) {
  let regex = /\d+/g;
  let numeros = string.match(regex);
  let copoAgua = 0;
  let resultado;
  for (let i = 0; i < numeros.length; i += 1) {
    copoAgua += parseInt(numeros[i], 10);
  }
  if (copoAgua === 1) {
    resultado = '1 copo de água';
  } else {
    resultado = copoAgua + ' copos de água';
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
