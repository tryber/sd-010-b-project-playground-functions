// Desafio 10
//const array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
function techList(techs, name) {
  let resultadoFinal = [];
  let resultadoVazio = '';
  if (techs !== 0) {
    let techOrdenados = techs.sort();
    for (let index = 0; index < techOrdenados.length; index += 1) {
      let resultado = { tech: '', name: '' };
      resultado.tech = techOrdenados[index];
      resultado.name = name;
      resultadoFinal.push(resultado);
    }
    return resultadoFinal;
  } else {
    resultadoVazio = 'Vazio!';
    return resultadoVazio;
  }
}
//console.log(techList(array , 'Jessie'));
// Desafio 11
function generatePhoneNumber() {
  //nada
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
