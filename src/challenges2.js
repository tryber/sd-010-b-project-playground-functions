// Desafio 10
function techList(arrayTecnologia,name) {
  if (arrayTecnologia.length === 0) {
    return 'Vazio!';
  }
  let arrayObjeto = [];
  let arrayTecnologiaSort = arrayTecnologia.sort();
  for (let cont = 0; cont < arrayTecnologiaSort.length; cont += 1) {
    let objeto = {
      tech: arrayTecnologiaSort[cont],
      name
    }
    arrayObjeto.push(objeto);
  } return arrayObjeto;

}


// Desafio 11
function generatePhoneNumber(arrayTelefone) {
  let duplicado = 0;
    
  for (let cont = 0; cont < arrayTelefone.length; cont += 1){

    if (arrayTelefone.length != 11){
      return  "Array com tamanho incorreto.";
    }
   
    if (arrayTelefone[cont] < 0 || arrayTelefone[cont] > 9){
      return "não é possivel gerar um número de telefone com esses valores";
    }

    for (let cont2 =0; cont2 <arrayTelefone.length; cont2 += 1){
      if (arrayTelefone[cont]  === arrayTelefone[cont2]){
        duplicado += 1;
      }
      if (duplicado > 2){
        return "não é possivel gerar um número de telefone com esses valores";
      }
    }   
}
  let numeroTelefone = "(" + arrayTelefone[0].toString() + arrayTelefone[1].toString() + ") " + arrayTelefone[2].toString() + arrayTelefone[3].toString() + arrayTelefone[4].toString() + arrayTelefone[5].toString() + arrayTelefone[6].toString() + "-" + arrayTelefone[7].toString() + arrayTelefone[8].toString() + arrayTelefone[9].toString() + arrayTelefone[10].toString() 
  
  return numeroTelefone;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

// eslint-disable-next-line no-undef
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
