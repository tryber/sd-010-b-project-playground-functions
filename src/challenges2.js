// Desafio 10
function techList(array, name) {
  if (array.length != 0) {
    let ordenada = array.sort();
    let lista = [];
    for (let key in ordenada) {
      let dicionario = {
        tech: ordenada[key],
        name: name
      }
      lista.push(dicionario);
    }
    return lista;
  }else{
    return 'Vazio!'
  }
}

// teste itam 10
// namePessoal = 'Lucas';
// array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// console.log(techList(array, namePessoal));
// namePessoal = 'Lucas';
// array1 = [];
// console.log(techList(array1, namePessoal));

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
