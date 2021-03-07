// Desafio 10

function techList(listaTech, listaName) {
  // seu código aqui
  let arr = [];
  let newArry = [];

  for (let element in listaTech) {
    arr.push(['tech', listaTech[element]], ['name', listaName]);
    newArry.push(obj = Object.fromEntries(arr));
  }
  return newArry;
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
