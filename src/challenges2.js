// Desafio 10
function techList(tech, name) {
  let techListObject = {};
  let returnObject = [];
  tech = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < tech.length; i++) {
    techListObject.tech = tech[i];
    techListObject.name = name;
    returnObject.push({ tech: tech[i], name });
  }
  return returnObject;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"));

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
