// Desafio 10
function techList(arrayTech, name) {
  let objFinal = [];
  if (arrayTech.length !== 0) {
    for (let index = 0; index < arrayTech.length; index += 1) {
      let obj = {
        tech: arrayTech[index],
        name: name
      };
      objFinal.push(obj);
    };
    return objFinal;
  };
  if (arrayTech.length == 0) {
    return 'Vazio!'
  };
};

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
