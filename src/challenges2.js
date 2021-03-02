// Desafio 10
function techList(arrayTech, name) {
  if (arrayTech.length === 0) {
    return 'vazio!';
  }
  let arraySorted = array.sort();
  let objArray = [];
  for (let index = 0; index < arraySorted.length; index += 1) {
    objArray[index] = {};
    objArray[index]['tech'] = arraySorted[index];
    objArray[index]['name'] = name;
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
