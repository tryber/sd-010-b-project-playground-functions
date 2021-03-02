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
      name: name
    }
  }
  return objeto;
}

// Desafio 11
// toString verificado no site https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/Strings
function generatePhoneNumber(array) {
  if (array.length > 11) {
    return 'Array com tamanho incorreto.';
  }
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
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] < 0) || (array[i] > 9 || (contaRepetido >= 3))) {
      return 'Não é possível gerar um número de telefone com esses valores.';
    }
  }
  let telefoneDDD = '(' + array[0] + array[1] + ')';
  let telefoneParteUm = '' + array[2] + array[3] + array[4] + array[5] + array[6];
  let telefoneParteDois = '' + array[7] + array[8] + array[9] + array[10];
  let numTelefone = telefoneDDD + ' ' + telefoneParteUm + '-' + telefoneParteDois;
  return numTelefone;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

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
function hydrate(String) {
  
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
