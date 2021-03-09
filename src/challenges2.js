// Desafio 10
function techList(teq, name) {
  teq = teq.sort();
  let final = [];
  if (teq.length !== 0) {
    for (let techindex = 0; techindex < teq.length; techindex += 1) {
      let array = {
        tech: 'exemplo',
        name,
      };
      array.tech = teq[techindex];
      final.push(array);
    }
    return final;
  } return 'Vazio!';
}

// Desafio 11
function generatePhoneNumber(numeros) {
  let phoneNumber = ['('];
  let contador = 0;
  if (numeros.length === 11) {
    for (let numberIndex = 0; numberIndex < numeros.length; numberIndex += 1) {
      for (let contIndex = 0; contIndex < numeros.length; contIndex += 1) {
        if (numeros[numberIndex] === numeros[contIndex]) {
          contador += 1;
        }
      }
      if (numeros[numberIndex] > 9 || numeros[numberIndex] < 0 || contador > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      } switch (numberIndex) {
      case 1:
        phoneNumber = `${phoneNumber}${numeros[numberIndex]}) `;
        break;
      case 6:
        phoneNumber = `${phoneNumber}${numeros[numberIndex]}-`;
        break;
      default:
        phoneNumber = `${phoneNumber}${numeros[numberIndex]}`;
        break;
      } contador = 0;
    } return phoneNumber;
  } return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck (lineA, lineB, lineC) {
  if (lineA > lineB + lineC) {
    return false;
  } if (lineB > lineA + lineC) {
    return false;
  } if (lineC > lineB + lineA) {
    return false;
  } return true;
}

// Desafio 13
function hydrate(pedido) {
  let soma = 0;
  pedido = pedido.replace(/\D/g, '');
  pedido = pedido.split('');
  for (let index = 0; index < pedido.length; index += 1) {
    pedido[index] = parseInt(pedido[index], 10);
    soma += pedido[index];
  }
  if (soma > 1) {
    return (`${soma} copos de água`);
  } return (`${soma} copo de água`);
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
