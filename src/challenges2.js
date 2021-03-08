// Desafio 10

/*  let box = [{ tech: "React", name: "Nikolas" }, {}]
 box[0].name = "Marcos"
 console.log(box[0]); */

function techList(tech, name) {

  if (tech.length !== 0) {
    tech = tech.sort();

    let arrTech = [];

    for (let i = 0; i < tech.length; i++) {
      arrTech.push({
        tech: tech[i],
        name: name
      });
    }
    return arrTech;
  }
  else {
    return "Vazio!"
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
