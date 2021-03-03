// Desafio 10
function techList(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    let bloco = {
      tech: array[index],
      nome: 'Jefferson'
  }
    newArray.push(bloco);
}
if(newArray.length ==0){
  return ('Vazio!')
}
  return (newArray);

  }

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
