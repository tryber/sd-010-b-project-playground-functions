// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let novoArray = tech.sort();
  let objetoTech = [];

  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < novoArray.length; index++) {
    objetoTech[index] = {
      tech: novoArray[index],
      name: name,
    };
  }

  return objetoTech;
}

// Desafio 11
function generatePhoneNumber(arrayTelefone) {
  // seu código aqui
  let repetidas = 0;
  let gerarTelefone = [
    '(',
    arrayTelefone[0],
    arrayTelefone[1],
    ')',
    ' ',
    arrayTelefone[2],
    arrayTelefone[3],
    arrayTelefone[4],
    arrayTelefone[5],
    arrayTelefone[6],
    '-',
    arrayTelefone[7],
    arrayTelefone[8],
    arrayTelefone[9],
    arrayTelefone[10],
  ];

  if (arrayTelefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let indice = 0; indice < arrayTelefone.length; indice++) {
    if (arrayTelefone[indice] < 0 || arrayTelefone[indice] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    repetidas = 0;
    for (let indice2 = 0; indice2 < arrayTelefone.length; indice2++) {
      if (arrayTelefone[indice] === arrayTelefone[indice2]) {
        repetidas++;
        if (repetidas === 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return gerarTelefone.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let verificacao = (lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC));
  let verificacao2 = (lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC));
  let verificacao3 = (lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB));

  if (verificacao && verificacao2 && verificacao3) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let filtro = /[1-9]/g;
  let arrayBebidas = string.match(filtro);
  let coposAgua = 0;

  for (let indice = 0; indice < arrayBebidas.length; indice++) {
    coposAgua = coposAgua + parseInt(arrayBebidas[indice]);
  }

  if (coposAgua === 1) {
    return `${coposAgua} copo de água`;
  }

  return `${coposAgua} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
