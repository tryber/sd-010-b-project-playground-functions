// Desafio 10
function techList(techno, name) {
  let newArray = [];
  techno.sort();

  if (techno.length === 0) {
    return "Vazio!";
  } else {
    for (let index = 0; index < techno.length; index += 1) {
      let arrayAux = [];
      let index0 = "tech: \""+techno[index]+"\"";
      let index1 = "name: \""+name+"\"";
      arrayAux.push(index0);
      arrayAux.push(index1);
      newArray.push(arrayAux);
    }

    return newArray;
  }
}

techList();
// Desafio 11
function generatePhoneNumber() {

}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

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
