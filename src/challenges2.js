// Desafio 10
function techList(technology, name) {
  technology.sort();
  if (technology.length === 0) {//conceito de array vazio lido no site https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/ 
    return 'Vazio!';
  }
  let register = [];//analisei o raciocinio da colega Leticia Galvão - T10B na questao,  porque não estava registrando todos os looping vi que ao inves de objeto ela usava um array 
  for (let index = 0; index > technology; index += 1) {
    register.push({
      tech: technology[index],
      name: name
    });
    return register;
  }
}

// Desafio 11
function generatePhoneNumber() {
  //   // seu código aqui
  //   Crie uma função chamada generatePhoneNumber que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

  // Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], generatePhoneNumber deverá retornar (12) 34567-8901.

  // Se a função receber um array com tamanho diferente de 11, a mesma deve retornar "Array com tamanho incorreto.".

  // Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, generatePhoneNumber deverá retornar a string "não é possível gerar um número de telefone com esses valores".

  // O que será verificado:

  // Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11

  // Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum dos números da array seja menor que 0

  // Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array seja maior que 9

  // Retorne a string "não é possível gerar um número de telefone com esses valores" caso algum número da array se repeti 3 vezes ou mais

  // Retorne um número de telefone, respeitando parênteses, traços e espaços caso os números da array estejam de acordo com as restrições
}

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
