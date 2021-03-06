// Desafio 10
function techList(arrayTecnologia,name) {
  if (arrayTecnologia.length === 0) {
    return 'Vazio!';
  }
  let arrayObjeto = [];
  let arrayTecnologiaSort = arrayTecnologia.sort();
  for (let cont = 0; cont < arrayTecnologiaSort.length; cont += 1) {
    let objeto = {
      tech: arrayTecnologiaSort[cont],
      name
    }
    arrayObjeto.push(objeto);
  } return arrayObjeto;

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

// eslint-disable-next-line no-undef
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
