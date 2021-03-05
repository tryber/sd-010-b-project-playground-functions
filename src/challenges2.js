// Desafio 10
function techList(array,name) {
  // seu código aqui
  let arrayNomes = array.sort();
  let arrayObj = [];
  for (let i = 0; i < arrayNomes.length; i += 1){
    arrayObj.push({tech:arrayNomes[i], name:name});
  }
  if (arrayObj.length > 0){
    return arrayObj;
  } return 'Vazio!'; 
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
