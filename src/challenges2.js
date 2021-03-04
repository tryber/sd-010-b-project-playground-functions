// Desafio 10
function techList(array, paramterName) {
  let list = [];
  if (array.length < 1) {
    return 'Vazio!';
  }

  for (let i in array.sort()) {
    list.push({
      tech: array[i], 
      name: paramterName,
    });
  }
  return list;
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
/* 
// Utilizei esse questão do stackoverflow para resolver o prbolema, https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
  list.sort((a, b) => {
    if (a.teach < b.teach) return -1;
    if (a.teach > b.teach) return 1;
    return 0;
  });
  
  */