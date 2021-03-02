// Desafio 10
function techList(skills, name) {
  let jobs = [];
  skills.sort();
  if (skills.length <= 0) {
    return 'Vazio!';
  }
  for (let index in skills){
    jobs.push({
      tech: skills[index],
      name: name,
    });
  }
  return jobs;
}
console.log(techList(['react'], 'Arlen'));
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
