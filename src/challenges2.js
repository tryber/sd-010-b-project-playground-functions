// Desafio 10
function techList(array, name) {
  if (array.length !== 0) {
    let ordenada = array.sort();
    let lista = [];
    for (let key in ordenada) {
      let dicionario = {
        tech: ordenada[key],
        name: name,
      };
      lista.push(dicionario);
    }
    return lista;
  }
  return 'Vazio!';
}

// teste itam 10
// namePessoal = 'Lucas';
// array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// console.log(techList(array, namePessoal));
// namePessoal = 'Lucas';
// array1 = [];
// console.log(techList(array1, namePessoal));

// Desafio 11
function verifyRepeated(array) {
  let flag = true;
  if (array.length > 0) {
    for (let key in array) {
      let counter = 0;
      for (let i = 0; i < array.length; i += 1) {
        if (array[i] === array[key]) {
          counter += 1;
        }
        flag = (counter <= 3);
      }
    }
  }
  return flag;
}

function verifyCharacter(array) {
  let flag = true;
  for (let key in array) {
    if (array[key] < 0 || array[key] > 9) {
      flag = false;
    }
  }
  return flag;
}

function phoneNumber(array) {
  let numberFormated = '(';
  for (let i = 0; i < array.length; i += 1) {
    if (i === 2) {
      numberFormated += ') ';
    }
    if (i === 7) {
      numberFormated += '-';
    }
    numberFormated += array[i];
  }
  return numberFormated;
}

function generatePhoneNumber(array) {
  if (array.length === 11) {
    let isNotChacacter = verifyCharacter(array); // é caracter é falso
    let isNotRepeated = verifyRepeated(array);
    if (isNotChacacter && isNotRepeated) {
      return phoneNumber(array);
    }
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
}
// teste item 11
// array0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(array0));
// array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(generatePhoneNumber(array1));
// array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1];
// console.log(generatePhoneNumber(array2));
// array3 = [111, 2, 3, 4, 15, 6, 7, 8, 9, 0, 99];
// console.log(generatePhoneNumber(array3));
// array4 = [1, 1, 1, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(array4));
// array5 = [-1, 2, 3, 4, 5, 6, 7, -1];
// console.log(generatePhoneNumber(array5));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let flag = false;
  let somaBC = lineB + lineC;
  let somaAC = lineA + lineC;
  let somaAB = lineA + lineB;
  let absBC = Math.abs(lineB - lineC);
  let absAC = Math.abs(lineA - lineC);
  let absAB = Math.abs(lineA - lineB);
  if ((lineA < somaBC) && (lineB < somaAC) && (lineC < somaAB) && (absBC < lineA) && (absAC < lineB) && (absAB < lineC)) {
    flag = true;
  }
  return flag;
}

// teste itam 12
// console.log(triangleCheck(10, 14, 8));
// console.log(triangleCheck(3, 4, 5 ));
// console.log(triangleCheck(5, 12, 13));
// console.log(triangleCheck(1, 2, 5 ));

// Desafio 13
function hydrate(umaFrase) {
  let fatiada = umaFrase.split('');
  let soma = 0;
  for (let key in fatiada) {
    let char = fatiada[key];
    if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
      soma += parseInt(char);
    }
  }
  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}

// teste item 13
// let frase1 = '1 cerveja';
// let frase2 = '1 cachaça, 5 cervejas e 1 copo de vinho';
// console.log(hydrate(frase2));
// console.log(hydrate(frase1));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
