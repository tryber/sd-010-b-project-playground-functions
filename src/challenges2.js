// Desafio 10
function techList(tech, name) {
  let lista = tech.sort();
  let resultado = [];

  if (lista.length > 1) {
    for (let index = 0; index < lista.length; index += 1) {
      resultado.push({ tech: lista[index], name: name });
    }
  } else {
    resultado = 'Vazio!';
  }
  return resultado;
};

// Desafio 11
function generatePhoneNumber(numeros) {

  if (numeros.length > 11) {
    return 'Array com tamanho incorreto.'
  };
  for (let index = 0; index < numeros.length; index += 1) {

    if (numeros[index] < 0 || numeros[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }

    let contador = 0;
    for (let index2 = 0; index2 < numeros.length; index2 += 1) {

      if (numeros[index] === numeros[index2]) {
        contador += 1;
      } if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
  };
  return '(' + numeros[0] + numeros[1] + ')' + ' ' + numeros[2] + numeros[3] + numeros[4] +
    numeros[5] + numeros[6] + '-' + numeros[7] + numeros[8] + numeros[9] + numeros[10];
};

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
