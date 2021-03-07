// Desafio 10
function techList(array, name) {
  let listaDeTecnologias = [];
  for (let index = 0; index < array.sort().length; index += 1) {
    listaDeTecnologias.push({
      tech: array[index],
      name,
    });
  }
  if (listaDeTecnologias.length === 0) {
    return 'Vazio!';
  }
  return listaDeTecnologias;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11

function generatePhoneNumber(array) {
  let telefone = '';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    let numeroRepetido = 0;
    for (let repetiçoes = 0; repetiçoes < array.length; repetiçoes += 1) {
      if (array[i] === array[repetiçoes]) {
        numeroRepetido += 1;
      }
    }
    if (array[i] < 0 || array[i] > 9 || numeroRepetido >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    telefone += array[i];
  }
  return `(${telefone.substring(0, 2)}) ${telefone.substring(2, 7)}-${telefone.substring(7, 11)}`;
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let eTriangulo = false;
  if (lineC < (lineA + lineB) && lineA < (lineB + lineC) && lineB < (lineA + lineC)) {
    eTriangulo = true;
  }
  return eTriangulo;
}
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(6, 1, 10));

// Resolvido com muita ajuda do stackoverflow, developermozilla.org ParseInt. https://www.devmedia.com.br/iniciando-expressoes-regulares/6557
// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let numeros = string.match(regex); // pego apenas os numeros da string em forma de lista
  let soma = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    soma += parseInt(numeros[i], 10); // transforma os numeros(str) da lista em int e soma
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  }
  return `${soma} copos de água`;
}
console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
