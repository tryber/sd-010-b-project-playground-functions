// Desafio 10
function techList(tech, name) {
  let obj = {
    tech,
    name,
  };
  let objList = [];
  let list = obj.tech.sort();
  for (let i in list) {
    objList.push({
      tech: list[i],
      name,
    });
  }
  if (obj.tech.length <= 0) {
    return 'Vazio!';
  }
  return objList;
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
