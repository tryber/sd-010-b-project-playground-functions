// Desafio 10
function techList(tec, nom) {
  let obj = {}
  if (tec === {}) {
    return "Vazio!";
  }
  for (let i in tec) {
    obj = obj + {tech: tec[i], name: nom};
  }
  return obj;
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
