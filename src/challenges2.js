// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  const arr = tech.sort().map( function(nomes) {
    return Object.assign({tech: nomes} , {name: name});
  });
  return arr;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Thiago'));

// Desafio 11
function generatePhoneNumber(number) {
  let num = number

  if (number.length !== 11) {
    return `Array com tamanho incorreto.`;
  } 

  for (let i = 0; i < number.length; i += 1) {
    if (number[i] > 9 || number[i] < 0) {
      return `não é possível gerar um número de telefone com esses valores`
    }
  }

  let qtdElementos1 = 0
  let qtdElementos2 = 0
  let qtdElementos3 = 0
  let qtdElementos4 = 0
  let qtdElementos5 = 0
  let qtdElementos6 = 0
  let qtdElementos7 = 0
  let qtdElementos8 = 0
  let qtdElementos9 = 0
  let qtdElementos0 = 0

  num.forEach((element) => {
    if (element === 1 ) {
      return qtdElementos1++
    }
    if (element === 2 ) {
      return qtdElementos2++
    }
    if (element === 3 ) {
      return qtdElementos3++
    }
    if (element === 4 ) {
      return qtdElementos4++
    }
    if (element === 5 ) {
      return qtdElementos5++
    }
    if (element === 6 ) {
      return qtdElementos6++
    }
    if (element === 7 ) {
      return qtdElementos7++
    }
    if (element === 8 ) {
      return qtdElementos8++
    }
    if (element === 9 ) {
      return qtdElementos9++
    }
    if (element === 0 ) {
      return qtdElementos0++
    }
  });

  if (qtdElementos1 >= 3 || qtdElementos2 >= 3 || qtdElementos3 >= 3 || qtdElementos4 >= 3 || qtdElementos5 >= 3 || qtdElementos6 >= 3 || qtdElementos7 >= 3 ||qtdElementos8 >= 3 || qtdElementos9 >= 3 || qtdElementos0 >= 3 ) {
    return `não é possível gerar um número de telefone com esses valores`
  }

  return `(${num[0]}${num[1]}) ${num[2]}${num[3]}${num[4]}${num[5]}${num[6]}-${num[7]}${num[8]}${num[9]}${num[10]}`
  
}

console.log(generatePhoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else {
    return false;
  }
}

console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(string) {
  let num = /\d+/g;
  let cups = string.match(num);
  let soma = 0;

  for (let i = 0; i < cups.length; i++) {
    soma += parseInt(cups[i]);
  }

  if (soma === 1) {
    return `${soma} copo de água`;
  } else {
    return `${soma} copos de água`;
  }
}

console.log(hydrate('2 cerveja 3 vinhos'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
