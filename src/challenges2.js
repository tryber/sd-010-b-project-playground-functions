// Desafio 10
function techList(tecnologias, nome) {
  let array = [];
  if (tecnologias.length !== 0) {
    tecnologias = tecnologias.sort();
    for (let key in tecnologias) {
      array[key] = {
        tech: tecnologias[key],
        name: nome,
      };
    }
  } else {
    array = 'Vazio!';
  }
  return array;
}
let array = [];
let nome = 'Lucas';
console.log(techList(array, nome));

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
