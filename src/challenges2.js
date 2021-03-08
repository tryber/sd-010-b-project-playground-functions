// Desafio 10
function techList(arrTech, name) {
  /*  let box = [{ tech: "React", name: "Nikolas" }, {}]
   box[0].name = "Paulo"
   console.log(box[0]); */

  arrTech = arrTech.sort();

  let arrNewTech = [];

  for (let i = 0; i < arrTech.legth; i++) {
    arrNewTech.push({
      tech: arrTech[i],
      name: name
    })
  }
  return arrNewTech;
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
