// Desafio 10
function techList(array, name) {
  let lista = array.sort();
  let arrayTech = [];
  for (let index = 0; index < array.length; index += 1) {
    let bloco = {
      tech: lista[index],
      name: name,
    }
    arrayTech.push(bloco);
  } return arrayTech;
} console.log(["HTML", "CSS", "JavaScript"], "Lucas");

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
