// Desafio 10
function techList(array, nome) {
  let organizado = [];
  if(array.length == 0){
    return "Vazio";
  }
  array.sort();
  for(let indice = 0; indice < array.length; array += 1){
    organizado.push({Tecnologia: array[indice], nome, });
  }
  return organizado;
}

// Desafio 11
function generatePhoneNumber() {
  let numero1 = convert(array, 2, 7);
  let numero2 = convert(array, 7);
  let ddd = convert(array, 0, 2);
  return `(${ddd}) ${numero1}-${numero2}`
}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(linhaA, linhaB, linhaC) {
  let juncaoAB = Math.abs(linhaA - linhaB);
  let juncaoAC = Math.abs(linhaA - linhaC);
  let juncaoBC = Math.abs(linhaB - linhaC);
  let somaAB = linhaA + linhaB;
  let somaAC = linhaA + linhaC;
  let somaBC = linhaB + linhaC;
  if( juncaoAB < linhaC && linhaC < somaAB && juncaoAC < linhaB && linhaB < somaAC && juncaoBC < linhaA && linhaA < somaBC){
    return true;
  }else{
    return false;
  }
}

console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(3, 4, 5));
console.log(triangleCheck(5, 12, 13));
console.log(triangleCheck(1, 2, 5));

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
