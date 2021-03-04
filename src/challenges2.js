// Desafio 10
function techList(array, name) {
  let techObject = []; 
  if (array.length != 0){
    for (let index in array.sort()){
      techObject.push({tech: array[index], name});//Fonte: Consultei o PR do Vinicius Broda para saber como criar o Objeto pelo push. No caso usando "{}" englobando chaves e valores dentro.
    }
    return techObject;
  } else {
    return 'Vazio!';
  }
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
