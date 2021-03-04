// Desafio 10
function techList(tech, name) {
  tech.sort();
  let techArray = [];
  if (tech === (0)) {
    techArray = techArray.toString();
    techArray = 'Vazio!';
  } else {
    for (let index = 0; index < tech.length; index += 1) {
      let technology = {};
      technology.name = name;
      technology.tech = tech[index];
      techArray.push(technology);
    }
  }
  return techArray;
}
// console.log(techList(["React", "CSS", "Drifting", "Node"], "Leandro"));

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
