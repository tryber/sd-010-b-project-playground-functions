// Desafio 10
function techList(nomesTecnologias, name) {
  let listaTecnologias = [];
  if (nomesTecnologias.length > 0) {
    nomesTecnologias.sort();
    nomesTecnologias.forEach((materia) => {
      listaTecnologias.push({ tech: materia, name });
    });
    return listaTecnologias;
  } return 'Vazio!';
}

// Desafio 11
function checkRepeat(number) {
  let testNumber = false;
  number.forEach((number1) => {
    let cont = 0;
    number.forEach((number2) => {
      if (number1 === number2) cont += 1;
      if (cont >= 3) testNumber = true;
    });
  });
  return testNumber;
}

function generatePhoneNumber(numeroRecebido) {
  if (numeroRecebido.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  numeroRecebido.forEach((num) => {
    if (num < 0 || num > 9) return 'não é possível gerar um número de telefone com esses valores';
  });
  if (checkRepeat(numeroRecebido)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  numeroRecebido.splice(0, 0, '(');
  numeroRecebido.splice(3, 0, ')');
  numeroRecebido.splice(4, 0, ' ');
  numeroRecebido.splice(10, 0, '-');

  let numeroFormatado = numeroRecebido.join('');
  return numeroFormatado;
}

// Desafio 12
function checkValues(a, b, c) {
  if (a > (b + c)
  && (a > Math.abs(b - c) || a > Math.abs(c - b))) {
    return true;
  }
  return false;
}
function triangleCheck(lineA, lineB, lineC) {
  if (checkValues(lineA, lineB, lineC)
  || checkValues(lineB, lineA, lineC)
  || checkValues(lineC, lineB, lineA)) return false;
  return true;
}

// Desafio 13
function hydrate(stringRecebida) {
  let numerosRecebidos = stringRecebida.replace(/\D/g, '');
  let coposDeAgua = 0;
  let mensagem = '';

  (numerosRecebidos.split('')).forEach((num) => {
    coposDeAgua += parseInt(num, 10);
  });
  if (coposDeAgua === 1) mensagem = '1 copo de água';
  else mensagem = `${coposDeAgua} copos de água`;

  return mensagem;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
