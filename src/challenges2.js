// Desafio 10
function techList(techNames, nameList) {
  let listOrdered = [];
  let objectList = {
    tech: 'techNames',
    name: nameList,
  };
  objectList = techNames.sort();
  if (objectList.length === 0) {
    return 'Vazio!';
  } else {
    for (let key in objectList) {
      listOrdered.push({
        tech: objectList[key],
        name: nameList
      }) 
    }
    return listOrdered;
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Lucas'))
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
