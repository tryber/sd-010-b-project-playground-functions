// Desafio 10
/*
  Essa função recebe o nome de uma tecnologia que se deseja aprender e um nome de uma pessoa. Um objeto será criado conforme a estrutura {tech: "NomeTech", name: 'nome'} e retornado.
 */
function createTechObject(techName, firstName) {
  let techObject = { tech: techName, name: firstName }; // cria objeto conforme estrutura solicitada

  return techObject; // retorna o objeto criado
}

/*
  Essa função recebe um array de nomes de tecnologias que se deseja aprender e um parâmetro name contendo um nome. Para cada tecnologia no array, será criado um objeto conforme a estrutura {tech: "NomeTech", name: 'nome'} e inserido em uma nova lista em ordem crescente a partir do campo tech no objeto. Por fim, essa lista é retornada ou a string 'Vazio!' caso o array de nomes de tecnologias venha vazio.

  Material consultado sobre como ordenar um array usando Array.sort
  https://www.w3schools.com/jsref/jsref_sort.asp
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  Material consultado sobre deep copy e shallow copy para array
  https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/
  https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
  https://www.digitalocean.com/community/tutorials/copying-objects-in-javascript
  https://stackoverflow.com/a/54138394
 */
function techList(techArray, name) {
  let techObjectList = []; // inicializa com array vazio a lista de objetos de tecnologia

  if (techArray.length > 0) { // se há nome em array de tecnologias
    // let copiedTechArray = Array.from(techArray);
    // copiedTechArray.sort();
    techArray.sort(); // ordena o array de tecnologias
    let techObject; // cria uma variável que armazenará temporariamente o techObject a ser criado
    for (const tech of techArray) {
      // cria um objeto conforme a estrutura solicitada e armazena em techObject
      techObject = createTechObject(tech, name);
      techObjectList.push(techObject); // armazena techObject na lista
    }
    return techObjectList; // retorna a lista de objetos de tecnologia
  }

  return 'Vazio!'; // retorna a string 'Vazio!' caso não haja nome em array de tecnologias
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
