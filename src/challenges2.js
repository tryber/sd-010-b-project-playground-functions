// Desafio 10
function techList(arrayTech, name) {
  let arrayStart = [];

  if (arrayTech.length) {
    for (i in arrayTech.sort()) {
      arrayStart.push({tech: arrayTech[i], name});
    }
    return arrayStart;
  } else {
    return "Vazio!";
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
