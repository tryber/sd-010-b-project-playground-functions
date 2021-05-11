// Desafio 10
function techList(tech, name) {
  tech.sort();
  let tecnologias = [];
  for (let index in tech) {
    let bloco = {
      tech: tech[index],
      name: name,
    }
    tecnologias.push(bloco);
  }
  if (tech.length === 0) {
    return "Vazio!"
  }
  return tecnologias;
}

// Desafio 11

function generatePhoneNumber(numPhone) {
  const formString = numPhone.join('');
  const formDDD = formString.substring(0, 2);
  const fiveNumbers = formString.substring(2, 7);
  const fourNumbers = formString.substring(7, 11);
  const result = `(${formDDD}) ${fiveNumbers}-${fourNumbers}`;

  if (numPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index in numPhone) {
    if (numPhone[index] < 0 || numPhone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let repeat = 0;
    for (let index2 in numPhone) {
      if (numPhone[index] === numPhone[index2]) {
        repeat++;
      }
      if (repeat >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return result;
}

console.log(generatePhoneNumber([2, 3, 4, 5, 6, 7, 8, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
  // veja os ultimos exercicios
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
