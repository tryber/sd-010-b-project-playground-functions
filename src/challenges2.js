// Desafio 10
function techList(arrayTech,name) {
  let finalList = [];
  let object = {
    arrayTech,
    name,
  };
  
  if (object.length === 0) {
    return "Vazio";
  }     
    let orderlyTechList = object.arrayTech.sort();  
    for (let key in orderlyTechList) {
          finalList.push({
          tech: orderlyTechList[key],
          name,
          });
    }
  return finalList;
  }
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
