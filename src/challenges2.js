// Desafio 10
function techList(arrayTech,name) {
  // meu código aqui
  let techLists = [];
  for (let i = 0; i < arrayTech.length; i++) {
    techLists.push( { tech: arrayTech[i], name: name }
    )
  } 
  return techLists;
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
