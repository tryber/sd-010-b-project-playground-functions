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

  let numeroFormatado = '';
  numeroFormatado = numeroRecebido.join();
  numeroFormatado = numeroFormatado.replace(/,/gi, '');
  return numeroFormatado;
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
