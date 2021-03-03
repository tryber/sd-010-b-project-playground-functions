// Desafio 10
function techList(arr, name) {
  arr.sort();
  let result = [];

  if (arr.length === 0) {
    return 'Vazio!';
  }
  for (let tech of arr) {
    result.push({
      tech: `${tech}`,
      name: `${name}`,
    });
  }

  return result;
}

// Desafio 11
function generatePhoneNumber(arr) {
  let numbers = {};
  const conditionals = (item) => {
    let num = numbers[item] ? (numbers[item] += 1) : (numbers[item] = 1);
    return num;
  };
  if (arr.length === 11) {
    for (let item of arr) {
      conditionals(item);
      if (numbers[item] >= 3 || item < 0 || item > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    let telefone = arr.toString().replace(/\D/g, '');
    let match = telefone.match(/^(\d{2})(\d{5})(\d{4})$/);
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let aB = lineA + lineB > lineC && lineC > Math.abs(lineA - lineB);
  let bA = lineC + lineA > lineB && lineB > Math.abs(lineC - lineA);
  let cB = lineB + lineC > lineA && lineA > Math.abs(lineC - lineB);

  return (aB, bA, cB);
}

// Desafio 13
function hydrate(string) {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let count = 0;

  for (let letter of string) {
    if (letter in numbers) {
      count += Number(letter);
    }
  }
  if (count > 1) {
    return `${count} copos de água`;
  }
  return `${count} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
