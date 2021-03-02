// Desafio 10
function techList(array, name) {
  let sort = array.sort();
  let list = [];

  for (let i = 0; i < sort.length; i += 1) {
    let object = {};

    object.tech = sort[i];
    object.name = name;
    list.push(object);
  }

  if (list.length === 0) {
    list = 'Vazio!';
  }

  return list;
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
