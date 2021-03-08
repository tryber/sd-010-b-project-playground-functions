// Desafio 10

function techList(listaTech, listaName) {
  if (listaTech.length === 0) { return 'Vazio!'; }
  let arr = [], newArry = [];

  function converteArrayEmObj() {
    for (let element in listaTech) {
      arr.push(['tech', listaTech[element]], ['name', listaName]);
      newArry.push(obj = Object.fromEntries(arr));
    }
    return newArry;
  }
  let arrayConvertido = converteArrayEmObj();
  // código retirado do forum https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort
  arrayConvertido.sort(function (a, b) { // função criada dentro do parâmetro .sort para fazer a comparação dos valores na propriedade "tech" e colocar em ordem alfabética
    if (a.tech < b.tech) { return -1; }
    if (a.tech > b.tech) { return 1; }
    return 0;
  });
  return arrayConvertido;
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
