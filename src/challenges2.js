// Desafio 10
function techList(nomesTecnologias, name) {
  let listaTecnologias = [];
  if (nomesTecnologias.length > 0) {
    nomesTecnologias.sort();
    for (let index in nomesTecnologias) {
      listaTecnologias.push({tech: nomesTecnologias[index], 
      name: name,
      });
    }
    return listaTecnologias;
  }
  else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(numeroRecebido) {
    if (numeroRecebido.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numeroRecebido.length; index += 1) {
    if (numeroRecebido[index] < 0 || numeroRecebido[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    let contagemRepitidos = 0;
    for (let index2 = 0; index2 < numeroRecebido.length; index2 += 1) {
      if (numeroRecebido[index] === numeroRecebido[index2]) {
        contagemRepitidos += 1;
      }
      if (contagemRepitidos >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  numeroRecebido.splice(0,0, '(');
  numeroRecebido.splice(3,0, ')');
  numeroRecebido.splice(4,0, ' ');
  numeroRecebido.splice(10,0, '-');

  let numeroFormatado = numeroRecebido.join('');
  return numeroFormatado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > (lineB + lineC)) {
    if (lineA > Math.abs(lineB-lineC) || lineA > Math.abs(lineC-lineB)) {
    return false;
    }
  }

  if (lineB > (lineA + lineC)) {
    if (lineB > Math.abs(lineA-lineC) || lineB > Math.abs(lineC-lineA)) {
    return false;
    }
  }

  if (lineC > (lineB + lineA)) {
    if (lineC > Math.abs(lineB-lineA) || lineC > Math.abs(lineA-lineB)) {
    return false;
    }
  }

  return true;
}

// Desafio 13
function hydrate(stringRecebida) {
  numerosRecebidos = stringRecebida.replace(/\D/g, '');
  let coposDeAgua = 0;
  for (let index = 0; index < numerosRecebidos.length; index += 1) {
    coposDeAgua += parseInt(numerosRecebidos[index], 10);
  }
  let mensagem = '';
  if (coposDeAgua === 1) {
    mensagem = '1 copo de água';
  }
  else {
    mensagem = coposDeAgua + ' copos de água';
  }
  return mensagem;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
