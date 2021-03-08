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
function generatePhoneNumber(arrayNumbers) {
  if (arrayNumbers.length !== 11 || arrayNumbers.length === null) { return "Array com tamanho incorreto."; }

  for (let index in arrayNumbers) {
    let count = 0;
    for (let index2 in arrayNumbers) {
      if (arrayNumbers[index] === arrayNumbers[index2]) { count += 1; }
    }
    if (arrayNumbers[index] < 0 || arrayNumbers[index] > 9 || count >= 3) { return 'não é possível gerar um número de telefone com esses valores'; }
  }

  let convertArrayToString = arrayNumbers.toString();
  let formatNumbers = convertArrayToString.replace(/,/g, '');
  let part1 = formatNumbers.slice(0,2);
  let part2 = formatNumbers.slice(2,7);
  let part3 = formatNumbers.slice(7, 11);
  return `(${part1}) ${part2}-${part3}`;
}

// Desafio 12
function triangleCheck(lineA,lineB, lineC) {
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
