// Desafio 10
function pump(ordenada, name) {
  let lista = [];
  let prop = name;
  for (let key in ordenada) {
    if (Object.prototype.hasOwnProperty.call(ordenada, key)) {
      let dicionario = {
        tech: ordenada[key],
        name: prop };
      lista.push(dicionario);
    }
  }
  return lista;
}

function techList(array, name) {
  if (array.length !== 0) {
    let ordenada = array.sort();
    let lista = pump(ordenada, name);
    return lista;
  }
  return 'Vazio!';
}

// teste item 10
// namePessoal = 'Lucas';
// array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
// console.log(techList(array, namePessoal))
// namePessoal = 'Lucas';
// array1 = [];
// console.log(techList(array1, namePessoal));

// Desafio 11
function repeterAnaliser(array) {
  let dic = {};
  for (let i = 0; i < array.length; i += 1) {
    if (dic[array[i]]) {
      dic[array[i]] += 1;
    } else {
      dic[array[i]] = 1;
    }
  }
  return Object.values(dic).sort().reverse()[0];
}

function verifyRepeated(array) {
  let flag = true;
  if (repeterAnaliser(array) >= 3) {
    flag = false;
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
    let isNotCharacter = verifyCharacter(array); // é caracter é falso
    let isNotRepeated = verifyRepeated(array);
    if (isNotCharacter && isNotRepeated) {
      return phoneNumber(array);
    }
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
}
// // teste item 11
// console.log(generatePhoneNumber([1, 2, 2, 4, 5, 5, 2, 8, 9, 0, 1]));
// console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]));
// console.log(generatePhoneNumber([0, 21, 3, 4, 14, 2, 7, 8, 19, 9, 4]));
// console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));
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

// // Desafio 12
function verifySum(lineA, lineB, lineC) {
  let somaBC = lineB + lineC;
  let somaAC = lineA + lineC;
  let somaAB = lineA + lineB;
  if ((lineA < somaBC) && (lineB < somaAC) && (lineC < somaAB)) {
    return true;
  }
}
function verifyAbs(lineA, lineB, lineC) {
  let absBC = Math.abs(lineB - lineC);
  let absAC = Math.abs(lineA - lineC);
  let absAB = Math.abs(lineA - lineB);
  if ((lineA > absBC) && (lineB > absAC) && (lineC > absAB)) {
    return true;
  }
}
function triangleCheck(lineA, lineB, lineC) {
  if (verifySum(lineA, lineB, lineC) && verifyAbs(lineA, lineB, lineC)) {
    return true;
  }
  return false;
}

// // teste item 12
// console.log(triangleCheck(10, 14, 8));
// console.log(triangleCheck(3, 4, 5));
// console.log(triangleCheck(5, 12, 13));
// console.log(triangleCheck(1, 2, 5));

// Desafio 13
function analyse(char) {
  let valor = null;
  if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
    valor = parseInt(char, 10);
  }
  return valor;
}

function sum(fatiada) {
  let soma = 0;
  for (let key in fatiada) {
    if (Object.prototype.hasOwnProperty.call(fatiada, key)) {
      let char = fatiada[key];
      soma += analyse(char);
    }
  }
  return soma;
}

function pluralSingular(soma) {
  if (soma > 1) {
    return `${soma} copos de água`;
  }
  return `${soma} copo de água`;
}
function hydrate(umaFrase) {
  let fatiada = umaFrase.split('');
  let soma = sum(fatiada);
  let resultado = pluralSingular(soma);
  return resultado;
}

// teste item 13
let frase1 = '1 cerveja';
let frase2 = '1 cachaça, 5 cervejas e 1 copo de vinho';
console.log(hydrate(frase2));
console.log(hydrate(frase1));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
