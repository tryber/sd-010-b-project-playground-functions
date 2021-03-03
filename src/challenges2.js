// Desafio 10
function techList(tech, name) {
  let objectListOutput = [];
  let object = {
    tech:tech,
    name: name
  }
  let ordenadedList = object.tech.sort();
  for(let key in ordenadedList) {    
    objectListOutput.push({
        tech: ordenadedList[key],
        name: name
    })
  }
  if (object.tech > 0) {
    return objectListOutput;
  } else {
    return 'Vazio!';
  }  
}
console.log(techList([],"Lucas"));

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
