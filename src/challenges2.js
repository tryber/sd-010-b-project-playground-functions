// Desafio 10
function techList(tech, name) {
  let newArray = tech.sort();
  let dado = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < newArray.length; i += 1) {
    dado[i] = {
      tech: newArray[i],
      name: `${name}`,
    };
  }
  return dado;
}

// Desafio 11
function generatePhoneNumber(a) {
  if (a.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < a.length; i += 1) {
    let count = 1;
    for (let j = 1; j < a.length; j += 1) {
      if (a[i] === a[j]) {
        count += 1;
      }
    }
    if (a[i] < 0 || a[i] > 9 || count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let ddd = `(${a[0]}${a[1]})`;
  let telefone1 = ` ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}`;
  let telefone2 = `-${a[7]}${a[8]}${a[9]}${a[10]}`;
  let telefone = ddd + telefone1 + telefone2;
  return telefone;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
