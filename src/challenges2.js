// Desafio 10
function techList(array, name) {
  let listaDeTecnologias = [];
  for (let index = 0; index < array.sort().length; index += 1) {
    listaDeTecnologias.push( {
      tech: array[index],
      name: name,
    });
  }
  if (listaDeTecnologias.length === 0) {
    return 'Vazio!'
  };
  return listaDeTecnologias;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber(array) {
  let telefone = ''
  if (array.length != 12) {
    console.log("Array com tamanho incorreto.")
  }
  for (let i = 0; i < array.length; i +=1) {
    if (array[i] < 0 || array[i] > 9)
  }
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
