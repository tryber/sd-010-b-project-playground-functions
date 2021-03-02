// Desafio 10
function techList(array, name) {
  if (array.length < 1) {
    let errorMessage = 'Vazio!';
    return errorMessage;
  } else {
    let listOfObjetcts = [];
    for (let index = 0; index < array.length; index += 1) {
      let object = {};
      object.tech = `${array[index]}`;
      object.name = name;
      listOfObjetcts.push(object);
    }
    return listOfObjetcts;
  }
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
