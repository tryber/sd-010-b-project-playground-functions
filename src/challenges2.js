// Desafio 10
function techList(techArray, name) {
  if (techArray.length !== 0) {
    let techListArray = objectArrayGenerator(techArray.sort(), name);
    return techListArray;
  }
  return "Vazio!"
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Breno"));

// Desafio 10 - Função extra1
function objectArrayGenerator(arraylist, name) {
  let objectArray = [];
  for (let index = 0; index < arraylist.length; index += 1) {
    let objectList = {
      tech: arraylist[index],
      name: name,
    }
    objectArray.push(objectList);    
  }
  return objectArray;
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
