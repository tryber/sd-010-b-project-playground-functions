// Desafio 10
function techList(techArray, name) {
  let letTechArray = techArray;
  let guardaArrayFinal = [];
  
  for (let key in letTechArray){
    if (letTechArray[key].length > 0 ){
    let objeto = {};
    objeto.tech=letTechArray[key];
    objeto.name=name;
    guardaArrayFinal.push(objeto);
  } else {
    return "Vazio!"
  }
}
return guardaArrayFinal;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Alexandre"))
console.log(techList([""], "Alexandre"))

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
