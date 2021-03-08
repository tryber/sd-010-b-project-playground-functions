// Desafio 10

function techList(array, name) {
  let objArray = [];
  let objOrder = array.sort();
  if (array.length == 0) {
    objArray = 'Vazio!';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      objArray.push([{
        tech: objOrder[index],
        name: name
      }])
    }
  }
  return objArray;
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
