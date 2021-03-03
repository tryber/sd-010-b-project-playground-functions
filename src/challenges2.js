// Desafio 10
function techList(array, name) {
  if (array.length !== 0) {
    let ordenada = array.sort();
    let lista = [];
    for (let key in ordenada) {
      let dicionario = {
        tech: ordenada[key],
        name: name
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
function generatePhoneNumber(array) {
  let invalido = true;
  if (array.length === 11) {
    for (let key in array) {
      if (array[key] < 0 || array[key] > 9) {
        invalido = false;
        break;
      }
      let counter = 0;
      for (let i = 0; i < array.length; i++) {
        if (array[i] === array[key]) {
          counter++;
        }
      }
      if (counter >= 3) {
        invalido = false;
      }
    }
    if (invalido !== false) {
      return '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
    } else {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  } else {
    return 'Array com tamanho incorreto.';
  }
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
  let fatiada = umaFrase.split("");
  let soma = 0;
  for (let key in fatiada) {
    let char = fatiada[key];
    if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
      soma += parseInt(char);
    }
  }
  if (soma > 1) {
    return `${soma} copos de água`;
  } else {
    return `${soma} copo de água`;
  }
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
