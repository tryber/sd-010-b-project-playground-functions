/** Consultei o repositório do Cristiano Lopes Duarte para descobrir como conto ao leitor do arquivo que eu quero criar um objeto. É usando as chaves {} pra conter as keys com suas respectivas propriedades.
https://github.com/tryber/sd-09-project-playground-functions/blob/tkdcris-project-playground-functions/src/challenges.js
*/

// Desafio 10
function techList(arei, name) {
  let objetoTechName = [];
  if (arei.length !== 0) {
    for (i in arei.sort()) {
      objetoTechName.push({ tech: arei[i], name });
    }
    return objetoTechName;
  }
  return 'Vazio!';
}

// Desafio 11

function rejectTelephoneOne(numero) {
  if (numero < 0) return 1;
  if (numero > 9) return 1;
  return 0;
}
let arrayComparativa = [];
function rejectTelephoneTwo(numero) {
  let contadorDeNumeros = 0;
  arrayComparativa.push(numero);
  for (let i = 0; i < arrayComparativa.length; i += 1) {
    if (numero === arrayComparativa[i]) contadorDeNumeros += 1;
  }
  if (contadorDeNumeros >= 3) return 1;
  return 0;
}

function telefonizadorDeNumeros(telefone) {
  const telefoneConvertido = `(${telefone[0]}${telefone[1]}) ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`;
  return telefoneConvertido;
}

function generatePhoneNumber(telefone) {
  if (telefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let verificadorNumeros = 0;
  telefone.forEach((numero) => {
    verificadorNumeros += rejectTelephoneOne(numero);
    verificadorNumeros += rejectTelephoneTwo(numero);
  });
  arrayComparativa = [];
  if (verificadorNumeros > 0) return 'não é possível gerar um número de telefone com esses valores';
  return telefonizadorDeNumeros(telefone);
}

console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lado1, lado2, lado3) {
  // seu código aqui
  if (lado1 + lado2 < lado3 || lado1 + lado3 < lado2) return false;
  if (lado2 + lado3 < lado1) return false;
  return true;
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
