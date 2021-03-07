// Desafio 10
function techList(tec, nom) {
  let obj = [];
  let newTec = tec.sort();
  for (let i = 0; i < tec.length; i += 1) {
    obj[i] = { tech: newTec[i], name: nom };
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
