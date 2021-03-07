// Desafio 10
function techList(tec, nom) {
  let list = [];
  let obj = {
    tec,
    nom,
  };
  let newTec = obj.tec.sort();
  for (let i in newTec) {
    list.push({
      tech: list[i],
      nom,
    })
  }
  if (tec.length <= 0) {
    return 'Vazio!'
  }
  return list;
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
