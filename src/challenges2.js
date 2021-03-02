// Desafio 10
function techList(array, string) {
  let output = [];
  if (array !== []) {
    for (let key in array) {
      if (string !== '') {
        output.push({ tech: array[key], name: string});
      }
    }
  }
  return output;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Thiago"));
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
