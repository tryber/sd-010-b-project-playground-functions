// Desafio 10
function techList(array, name) {
  // seu código aqui
  let arrayObjeto = [];
  let objeto = {};
  let resultado;
  array.sort();
  if (array.length == 0) {
    resultado = "Vazio!";
  } else {
    for (let index = 0; index < array.length; index += 1) {
      objeto.tech = array[index];
      objeto.name = name;
      arrayObjeto.push(objeto);
      objeto = {};
    }
    resultado = arrayObjeto;
  }
  return resultado
} 

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  }
  // Funcao para retornar o menor valor de um array
  Array.min = function(array) {
    return Math.min.apply(Math, array);
  };
  // Funcao para retornar o maior valor de um array
  Array.max = function(array) {
    return Math.max.apply(Math, array);
  };
  if (Array.min(array) < 0 || Array.max(array) > 9){
    return "não é possível gerar um número de telefone com esses valores";
  }
  for (let index = 0; index < array.length; index += 1) {
    let repitir = array[index];
    let cont = 0;
    for (let indexComp = 0; indexComp < array.length; indexComp += 1) {
      if (array[index] === array[indexComp]) {
        cont = cont + 1;
      }
      if (cont == 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  let numero = '';
  let caracteres = '() -'; 
  let posicaoCaract = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (index == 0 || index == 2) {
      numero = numero + caracteres[posicaoCaract];
      posicaoCaract = posicaoCaract + 1;
    } 
    if (index == 2 || index == 7) {
      numero = numero + caracteres[posicaoCaract];
      posicaoCaract = posicaoCaract + 1;
    } 
     numero = numero + array[index];
  }
  return numero;
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
console.log(generatePhoneNumber([]));