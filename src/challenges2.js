// Desafio 10
function techList(array, name) {
  let arraySort = array.sort();
  let arrayObject = [];
  if (array.length > 0) {
    for (index = 0; index < array.length; index += 1) {
      arrayObject.push({ tech: arraySort[index],
       name: name });
    }
  } else {
    return 'Vazio!';
  }
  return arrayObject;
}

console.log(techList(['python', 'java', 'html'],"Lucas"))
// Desafio 11
function generatePhoneNumber(array) {
  if (array.length > 11) {
    return "Array com tamanho incorreto."
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
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
