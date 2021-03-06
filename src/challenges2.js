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

// regex based on https://stackoverflow.com/questions/42104546/java-regular-expressions-to-validate-phone-numbers/42105140

const concat = (arr) => {
  let telefone = arr.toString().replace(/\D/g, '');
  let combine = telefone.match(/^(\d{2})(\d{5})(\d{4})$/);
  return `(${combine[1]}) ${combine[2]}-${combine[3]}`;
};

const conditionals = (arr, numbers) => {
  for (let item of arr) {
    numbers[item] += 1;
    if (numbers[item] >= 3 || item < 0 || item > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return concat(arr);
};

function generatePhoneNumber(arr) {
  let numbers = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
  if (arr.length !== 11) return 'Array com tamanho incorreto.';
  return conditionals(arr, numbers);
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
