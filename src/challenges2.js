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
  
}

console.log(generatePhoneNumber([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

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
