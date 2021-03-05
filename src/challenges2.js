// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  let listTech = [];
  if (technologies.length === 0) {
    return 'Vazio!';
  } else {
    technologies.sort();
    for (let index = 0; index < technologies.length; index += 1) {
      listTech[index] = {
        tech: technologies[index],
        name: name
      };
    }
  }
  return listTech;
}

// Desafio 11
function validArray(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (let index = 0; index < array.lenght; index += 1) {
    let count = 0;
    for (let internIndex = 0; internIndex < array.lenght; internIndex += 1) {
      if (array[index] === array[internIndex]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }



}




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
