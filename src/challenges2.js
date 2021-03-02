// Hello! Welcome to my playground!

// Desafio 10
function techList(tech, name) {
  if (tech.length < 1) {
    return 'Vazio!';
  }
  const techList = [];
  const sortedArray = tech.sort();
  for (let index = 0; index < sortedArray.length; index += 1) {
    techList[index] = {
      tech: sortedArray[index],
      name: name,
    };
  }
  return techList;
}

// Desafio 11
function generatePhoneNumber(arr) {
  //starting checks
  if (arr.length !== 11) return 'Array com tamanho incorreto.';

  //mapping the arr, could do another function, but for practice sake and the evaluetor i did not.
  const arrMap = {};
  for (let index = 0; index < arr.length; index += 1) {
    if (!arrMap[arr[index]]) {
      arrMap[arr[index]] = 1;
    } else {
      arrMap[arr[index]] += 1;
    }
  }

  // finding the most repeated number in array, also could do another function for this.
  let mostRepeatedNumber = 1;
  for (let key in arrMap) {
    if (arrMap[key] > mostRepeatedNumber) {
      mostRepeatedNumber = arrMap[key];
    }
  }
  //last checks
  const safeArray = arr.slice();
  const sortedArray = arr.sort((a, b) => a - b);
  if (
    mostRepeatedNumber > 2 ||
    sortedArray[0] < 0 ||
    sortedArray[sortedArray.length - 1] > 9
  )
    return 'não é possível gerar um número de telefone com esses valores';
  //creating string
  let parenthesis = '';
  let firstPart = '';
  let lastPart = '';

  for (let index = 0; index < 2; index += 1) {
    if (index == 0) {
      parenthesis += `(${safeArray[index]}`;
    } else {
      parenthesis += `${safeArray[index]}) `;
    }
  }

  for (let index = 2; index < 7; index += 1) {
    if (index == 6) {
      firstPart += `${safeArray[index]}-`;
    } else {
      firstPart += safeArray[index];
    }
  }

  for (let index = 7; index < 11; index += 1) {
    lastPart += safeArray[index];
  }

  return parenthesis + firstPart + lastPart;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

// Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.

// Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".

// Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".

// O que será verificado:

// Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11

// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números da array seja menor que 0

// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array seja maior que 9

// Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array se repeti 3 vezes ou mais

// Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números da array estejam de acordo com as restrições

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
