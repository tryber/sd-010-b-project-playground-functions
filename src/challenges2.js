// Desafio 10
function techList(array, name) {
  let listaDeTecnologias = [];
  for (let index = 0; index < array.sort().length; index += 1) {
    listaDeTecnologias.push({
      tech: array[index],
      name: name,
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
  return `(${telefone[0]}${telefone[1]}) ${telefone[2]}${telefone[3]}${telefone[4]}${telefone[5]}${telefone[6]}-${telefone[7]}${telefone[8]}${telefone[9]}${telefone[10]}`;
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let eTriangulo = false;
  if(lineC < (lineA + lineB) && lineA < (lineB + lineC) &&  lineB < (lineA + lineC)) {
       eTriangulo = true;
     }
  return eTriangulo;
}
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(6,1,10));
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
