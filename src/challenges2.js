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

  if (arr.length === 11) {
    for (let item of arr) {
      numbers[item] = 0;
    }

    for (let occ of arr) {
      numbers[occ] += 1;
      if (occ < 0 || occ > 9 || numbers[occ] >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }

    let telefone = '(';
    for (let i = 0; i < arr.length; i += 1) {
      if (telefone.length === 3) {
        telefone += ') ' + arr[i];
      } else if (telefone.length === 10) {
        telefone += '-' + arr[i];
      } else {
        telefone += arr[i];
      }
    }
    return telefone;
  }

  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC && lineC > Math.abs(lineA - lineB)) {
    return true;
  } else if (lineC + lineA > lineB && lineB > Math.abs(lineC - lineA)) {
    return true;
  } else if (lineB + lineC > lineA && lineA > Math.abs(lineC - lineB)) {
    return true;
  }
  return false;
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
