// Desafio 10
function techList(techs, name) {
  let ordenedList = techs.sort();
  let resultList = [];
  for (let index = 0; index < ordenedList.length; index += 1) {
    resultList.push(list = {
      tech: techs[index],
      name: name,
    })
  }
  return resultList;
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
