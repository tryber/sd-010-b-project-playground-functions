// Desafio 10
function techList(theArray, theString) {
  let output = [];
  let lastArray = [];
  const arrrayInOrder = theArray.sort();
  if (theArray.length > 0) {
    for (let index = 0; index < theArray.length; index += 1) {
      let theObject = {
        tech: arrrayInOrder[index],
        name: theString,
      };
      lastArray.push(theObject);
    }
    output = lastArray;
  } else {
    output = 'Vazio!';
  }
  return output;
}
// Desafio 11
function generatePhoneNumber(num) {
  if (num.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  const mensagemErro = 'não é possível gerar um número de telefone com esses valores';
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] < 0 || num[index] > 9) {
      return mensagemErro;
    }
    let repeated = 0;
    for (let count = 0; count < num.length; count += 1) {
      if (num[index] === num[count]) {
        repeated += 1;
      }
      if (repeated >= 3) {
        return mensagemErro;
      }
    }
  }
  num.splice(0, 0, '(');
  num.splice(3, 0, ')');
  num.splice(4, 0, ' ');
  num.splice(10, 0, '-');
  const numFinal = num.join('');
  return numFinal;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}
// Desafio 13
function hydrate(string) {
  let num = string.replace(/\D/g, '');
  let water = 0;
  for (let index = 0; index < num.length; index += 1) {
    water += parseInt(num[index], 10);
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}
// Tive o entendimento sobre as 'RegExp' principalmente pelo site:
// https://www.luiztools.com.br/post/15-dicas-e-truques-da-linguagem-javascript/#6

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
