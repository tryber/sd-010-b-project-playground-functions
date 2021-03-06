// Desafio 10
function techList(seilah, nome) {
  let tecAlfa = seilah.sort();
  let tecnologias = {
    tech: 'NomeTech',
    name: nome,
  };
  let retorno = [];
  for (let cont in tecAlfa) {
    tecnologias.tech = tecAlfa[cont]
    let teste = [];
      for (let key in tecnologias) {
        teste[key] = (tecnologias[key]);
        if (tecnologias.tech == 'NomeTech') {
          return 'Vazio!'
        };
    };
    retorno[cont] = teste;
 };
  return retorno;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
