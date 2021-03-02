// Desafio 10
function techList(techs, name) {
  // seu código aqui
  let arrayTech = [];
  let objetoTech = {};

  techs.sort();

  for (let key in techs){
    arrayTech.push(techs[key]);
    arrayTech.push(name);
  }

  objetoTech.tecnologias = arrayTech;
  console.log(objetoTech);
}

techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")

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
