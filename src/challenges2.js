// Desafio 10
function techList(tech, name) {
  if(tech.length === 0) {
    return 'Vazio!'
  }

  const arr = tech.sort().map( function(nomes) {
     return Object.assign({tech: nomes},{name: name})
  })

  return arr
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Thiago'))

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
