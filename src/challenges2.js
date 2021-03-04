// Desafio 10
function techList(tech, name) {
  let list = tech.sort();
  let result = [];
  if (list.length > 1) {
    for (let i = 0; i < list.length; i += 1) {
      result.push({tech: list[i], name: name});
    }
  } else result = 'Vazio!';
  return result;
}

// Desafio 11
function generatePhoneNumber() {

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
