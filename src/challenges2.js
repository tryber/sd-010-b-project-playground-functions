// Desafio 10
function techList([tech],name) {
  let finalList = [];
  let object = {
    tech,
    name,
  };
  let orderlyTechList = object.tech.sort();
  for (let key in orderlyTechList) {
    finalList.push({
      tech: orderlyTechList[key],
      name,
    });
  }
  if (object.tech.length > 0) {
    return finalList;
  } else {
    return 'Vazio!';
}
}
console.log(techList(['JavaScript', 'React', 'Phyton', 'DOM', 'CSS'],'Janaina'));

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
