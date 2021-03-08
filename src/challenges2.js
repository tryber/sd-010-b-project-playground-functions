// Desafio 10
function techList(tecnologia, pessoa) {
  let objeto = [];
  let tecnologia2 = tecnologia.sort(); //.sort coloca em ordem alfabetica
  if (tecnologia2.length == 0) {
    return "Vazio!";
  }
  for (let key in tecnologia2) {
    objeto.push({
      tech: tecnologia2[key],
      name: pessoa
    }) // : para fazer objeto
  }
  return objeto;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber(arrayTel) {
  let telefone = ""
  if (arrayTel.length != 11) {
    return "Array com tamanho incorreto";
  }
  for (let key in arrayTel) {
    let repete = 0;
    if (arrayTel[key] < 0 || arrayTel[key] > 9) { // se houver algum numero menor que 0 ou maior que 9
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (let keyIndex in arrayTel) {
      if (arrayTel[key] == arrayTel[keyIndex]) {
        repete += 1;
      }
      if (repete >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  for (let telIndex = 0; telIndex < arrayTel.length; telIndex += 1) { //condições para colocar os () e -
    if (telIndex == 0) {
      telefone += "(" + arrayTel[telIndex];
    } else if (telIndex === 1) {
      telefone += arrayTel[telIndex] + ") ";
    } else if (telIndex === 6) {
      telefone += arrayTel[telIndex] + "-";
    } else
      telefone += arrayTel[telIndex];
  }
  return telefone;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, ]));


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // exercico 9
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
