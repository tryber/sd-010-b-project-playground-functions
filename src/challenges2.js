// Desafio 10
const array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
function techList(techs, name) {
  let resultadoFinal = [];
  if (techs !== '') {
    let techOrdenados = techs.sort();
    for (let index = 0; index < techOrdenados.length; index += 1) {
      let resultado = {};
      resultado.tech = techOrdenados[index];
      resultado.name = name;
      resultadoFinal.push(resultado);
    }
  } else {
    resultadoFinal = 'Vazio!';
  }
  return resultadoFinal;
}
console.log(techList(array, 'Jessie'));
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
