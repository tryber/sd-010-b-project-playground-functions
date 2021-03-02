// Desafio 10
function techList(tech) {
  let lista = tech.sort();
  let nome = 'Lucas';
  let retorno = [];

  if (lista.length > 1) {
    for (let index = 0; index < lista.length; index++) {
      retorno.push({ tech: lista[index], name: nome });
    }
  } else {
    retorno = 'Vazio!';
  }
  return retorno;
}

// Desafio 11
function generatePhoneNumber(parametro) {
  let retorno = [];

  // Retorne a string "Array com tamanho incorreto." caso o array tenha o tamanho diferente de 11
  if (parametro.length === 11) {
    let continua = true;

    // Verifica se algum dos números da array seja menor que 0, maior que 9
    for (let index = 0; index < parametro.length; index++) {
      if (parametro[index] < 0 || parametro[index] > 9) {
        continua = false;
        retorno =
          'não é possível gerar um número de telefone com esses valores';
        break;
      }
    }

    // Se for maior ou igual a 0, menor ou igual a 9
    if (continua) {
      for (let check = 0; check < parametro.length; check++) {
        // Pega o valor do número o array na posição check
        let numeroCheck = parametro[check];
        let verificaRepeticao = 0;

        // Inicia a verificação número por número com referencia do numero check
        for (let verifica = 0; verifica < parametro.length; verifica++) {
          if (numeroCheck === parametro[verifica]) {
            verificaRepeticao++;
          }
        }

        // Verifica se algum número se repete mais que 3x
        if (verificaRepeticao >= 3) {
          continua = false;
          retorno =
            'não é possível gerar um número de telefone com esses valores';
          break;
        } else {
          return (
            '(' +
            parametro[0] +
            parametro[1] +
            ')' +
            ' ' +
            parametro[2] +
            parametro[3] +
            parametro[4] +
            parametro[5] +
            parametro[6] +
            '-' +
            parametro[7] +
            parametro[8] +
            parametro[9] +
            parametro[10]
          );
        }
      }
    }
  } else {
    retorno = 'Array com tamanho incorreto.';
  }
  return retorno;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let retorno = false;

  if (lineA < Math.abs(lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    if (lineB < Math.abs(lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
      if (lineC < Math.abs(lineB + lineA) && lineC > Math.abs(lineA - lineB)) {
        retorno = true;
      }
    }
  }
  return retorno;
}

// Desafio 13
function hydrate(parametro) {
  let numbers = parametro.replace(/[^0-9]/g,'');
  let arrayNumeros = numbers.split("");
  let somaNumeros = 0;

  for (let index = 0; index < arrayNumeros.length; index++) {
    somaNumeros += parseInt(arrayNumeros[index]);    
  }

  return somaNumeros === 1 ? somaNumeros+" copo de água" : somaNumeros +" copos de água";
}

console.log(hydrate("1 cachaça"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
