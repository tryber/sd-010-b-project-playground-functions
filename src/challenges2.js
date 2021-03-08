// Desafio 10

function techList(array, name) {
  let obj = {};
  if (array.length == 0) {
    return 'Vazio!';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      obj.tech = array[index];
      obj.name = name;
    }
  }
  return obj;
}
console.log(techList([]));

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
