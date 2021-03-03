// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let novoArray = tech.sort();
  let objetoTech = [];

  if (tech.length == 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < novoArray.length; index++) {
    objetoTech[index] = {
      tech: novoArray[index],
      name: name,
    }
  }

  return objetoTech;
}

// Desafio 11
function generatePhoneNumber(arrayTelefone) {
  // seu código aqui
  let repetidas = 0;
  let gerarTelefone = [
    "(", arrayTelefone[0], arrayTelefone[1], ")", " ", arrayTelefone[2], arrayTelefone[3], arrayTelefone[4], arrayTelefone[5], arrayTelefone[6], "-", arrayTelefone[7], arrayTelefone[8], arrayTelefone[9], arrayTelefone[10]
  ];

  for (let indice = 0; indice < arrayTelefone.length; indice++){
    if (arrayTelefone[indice] < 0 || arrayTelefone[indice] > 9 || arrayTelefone.length != 9){
      return "não é possível gerar um número de telefone com esses valores";
    }
    repetidas = 0;
    for (let indice2 = 0; indice2 < arrayTelefone.length; indice2++){
      if (arrayTelefone[indice] == arrayTelefone[indice2]){
        repetidas++;
        if (repetidas == 3){
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
  } 
  return gerarTelefone.join("") ;
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
