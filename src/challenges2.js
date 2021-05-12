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
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  }
  if (lineB < (lineA + lineC) && (lineB > Math.abs(lineA - lineC))) {
    return true;
  }
  if (lineC < (lineA + lineB) && (lineC > Math.abs(lineA - lineB))) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8));
// Desafio 13
function hydrate(drinks) {
  const regex = /\d+/g; 
  const drinksRegex = drinks.match(regex);

  let acc = 0;
  for (let index in drinksRegex) {
    acc += parseInt(drinksRegex[index], 10);
  }
  if (acc === 1) {
    return '1 copo de água';
  }
  return `${acc} copos de água`
}
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// Agradecimentos a Lara Capila Turma 10 - Tribo B
