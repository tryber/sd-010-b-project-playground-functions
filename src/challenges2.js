// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  let listTech = [];
  if (technologies.length === 0) {
    return 'Vazio!';
  }else {
    for (let index = 0; index < technologies.length; index += 1) {
      listTech[index] = {
        tech: technologies[index],
        name: name
      };
    }
  }
  return listTech;
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
