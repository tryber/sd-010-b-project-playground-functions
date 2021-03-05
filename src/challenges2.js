// Desafio 10
function techList(technology, name) {
  let register = {}
  let final = {}
  for (let index in technology) {
    if (technology === 0) { //conceito de array vazio lido no site https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/ 
      register = 'vazio'
    } else {
      register.tech = technology[index];
      register.name = name;
    }
    return register;
  }

}
//   crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.

// Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

// {
//   tech: "NomeTech",
//   name: name
// }
// Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.

// A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.

// Exemplo:

// Entradas da função:

// ["React", "Jest", "HTML", "CSS", "JavaScript"]
// "Lucas"

// // Saída:

// [
//   {
//     tech: "CSS",
//     name: "Lucas"
//   },
//   {
//     tech: "HTML",
//     name: "Lucas"
//   },
//   {
//     tech: "JavaScript",
//     name: "Lucas"
//   },
//   {
//     tech: "Jest",
//     name: "Lucas"
//   },
//   {
//     tech: "React",
//     name: "Lucas"
//   }
// ]
// Caso o array venha vazio sua função deve retornar 'Vazio!'

// O que será verificado:

// Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias deve

// Retorne a mensagem de erro 'Vazio!' quando a lista tiver com 0 tecnologias

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
