// Desafio 10
function techList(namesTechs, name) {
  let objTechList = [];
  if (namesTechs.length == 0){
    return "Vazio"
  }
  namesTechs.sort();
  for(let i in namesTechs){
    objTechList.push({
      tech : namesTechs[i],
      name
    })
  }
  return objTechList;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Adão"));
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
