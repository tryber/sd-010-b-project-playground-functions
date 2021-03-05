// Frameworks
function validatorRepeat(arr) {
  let repeated = 0;
  let qtt = arr.length;
  arr.forEach((e) => {
    let cont = null;

    for (let i = 0; i < qtt; i += 1) {
      if (e === arr[i]) {
        cont += 1;
      }
    }

    if (cont > repeated) repeated = cont;
  });

  return repeated;
}

function phoneNumberValidator(arr) {
  let maxNumber = Math.max(...arr);
  let minNumber = Math.min(...arr);
  let repeated = validatorRepeat(arr);

  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (maxNumber > 9 || minNumber < 0 || repeated >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return false;
}

function phoneNumber(arr) {
  let qtt = arr.length;
  let phone = null;

  phone = `(${arr[0]}${arr[1]}) `;

  for (let i = 2; i <= 6; i += 1) {
    phone += arr[i];
  }

  phone += '-';

  for (let i = 7; i < qtt; i += 1) {
    phone += arr[i];
  }

  return phone;
}
function isTrueLine(A, B, C) {
  if (Math.abs(B - C) < A && A < (B + C)) {
    return true;
  }
  return false;
}

// Desafio 10
function techList(array, paramterName) {
  let list = [];
  if (array.length < 1) {
    return 'Vazio!';
  }

  array.sort();
  array.forEach((e) => {
    list.push({
      tech: e,
      name: paramterName,
    });
  });

  return list;
}

// Desafio 11
function generatePhoneNumber(arr) {
  let msgError = phoneNumberValidator(arr);

  if (msgError) {
    return msgError;
  }

  return phoneNumber(arr);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // Aqui o que importar é somente a ordem do primeiro parâmetro
  let resultA = isTrueLine(lineA, lineB, lineC);
  let resultB = isTrueLine(lineB, lineA, lineC);
  let resultC = isTrueLine(lineC, lineA, lineB);

  if (resultA && resultB && resultC) {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
