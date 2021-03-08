// Desafio 10 // Neste desafio contei com a ajuda dos meus colegas Carlos Vieira e Wellington Passo, que auxiliaram a enxergar algumas fragilidades do código.
function techList(arrayTech,name) {
  let finalList = [];
  let object = {
    arrayTech,
    name
  };
  if (object.arrayTech.length === 0 || object.name === "") {
    return 'Vazio!';
  }
    let orderlyTechList = object.arrayTech.sort();
      for (let key in orderlyTechList) {
          finalList.push({
          tech: orderlyTechList[key],
          name: name
          });
    }
  return finalList;
  }
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));
console.log(techList([], "Lucas"));

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
