// Desafio 10
function techList(tech, name) {
  let techSort = tech.sort();
  let arrObj = [];
  let myName = name;

  if (tech.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < techSort.length; index += 1) {
    arrObj.push(
      {
        tech: techSort[index],
        name: myName,
      },
    );
  }
  return arrObj;
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
