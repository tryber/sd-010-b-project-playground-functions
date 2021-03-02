// Desafio 10
function techList(tech, name) {
  let novaArray = tech.sort();
  let objeto = [];
  if (tech.length === 0) {
    return "Vazio!"
  }
  for (let i = 0; i < novaArray.length; i += 1) {
    objeto[i] = {
      tech: novaArray[i],
      name: name
    }
  }
  return objeto;
} console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

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
