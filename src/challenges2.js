// Desafio 10
// Refatorei o código após ver um exemplo do Emerson Saturino em uma thread no slack
function techList(arrayList, name) {
  let organizedArray = [];
  if (arrayList.length == 0) {
    return 'Vazio!';
  } else {
    arrayList.sort();
    for (let index in arrayList) {
      organizedArray.push({tech: arrayList[index], name: name,})
    }
  }
  return organizedArray;
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
