// Desafio 10
function techList(array, name) {
  let listOfObjetcts = [];
  for (let index = 0; index < array.length; index += 1) {
    let object = {};
    object.tech = `${array[index]}`;
    object.name = name;
    listOfObjetcts.push(object);
  }
  return listOfObjetcts;
}
let teste = [1, 2, 3, 4, 5, 6, 7];
techList(teste, 'Renan');
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
