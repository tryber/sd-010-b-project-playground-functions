// Desafio 10
function techList(array, name) {
  // seu código aqui
  let arrayObjeto = [];
  let objeto = {};
  let resultado;
  if (array.length == 0) {
    resultado = "Vazio";
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
console.log(techList([],"Lucas"));