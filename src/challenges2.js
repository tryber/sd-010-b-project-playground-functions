// Desafio 10
function techList(tech, name) {
  let list = [];
  let obj = {
    tech,
    name,
  };
  let newTech = obj.tech.sort();
  for (let i in newTech) {
    list.push({
      tech: list[i],
      name,
    });
  }
  if (tec.length <= 0) {
    return 'Vazio!';
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
