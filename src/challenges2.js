// Desafio 10
function techList(techs, name) {
  let objectTechs = [];
  techs.sort();
  for (let i = 0; i < techs.length; i++) {
    let obj = {};
    obj.tech = techs[i];
    obj.name = name;
    objectTechs.push(obj);
  }
  return objectTechs;
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
