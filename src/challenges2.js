// Desafio 10
function techList(tecnologias, name) {
  let resultado = [];
  let ordemCrescente = tecnologias.sort();
  if (tecnologias.length < 1) {
    resultado = "Vazio!"
  } else {
  for (let index = 0; index < ordemCrescente.length; index++) {
    let objeto = {
      tech: ordemCrescente[index],
      name: name,
    }
    resultado.push(objeto);
    }
  }
  return resultado;
}
// Auxilio por orientação:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//console.log(techList([], "Lucas"))

// Desafio 11
function generatePhoneNumber(numero) {
  let repeticao = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let resultado = "";
  let numeroAtual = 0;
  if (numero.length == 11) {
    for (let index in numero) {
      let verificadorRepeticao = numero[index];
      if (numero[index] < 0 || numero[index] > 9) {
        resultado = "não é possível gerar um número de telefone com esses valores";
        break;
      } else if (repeticao[verificadorRepeticao] >= 3) {
        resultado = "não é possível gerar um número de telefone com esses valores";
        break;
      } else {
        if (index == 0) {
          resultado = "(" + numero[index];
          numeroAtual = numero[index] - 1;
          repeticao[numeroAtual] += 1;
        } else if (index < 2) {
          resultado += numero[index] + ") ";
          numeroAtual = numero[index] - 1;
          repeticao[numeroAtual] += 1;
        } else if (index < 7) {
          resultado += numero[index];
          numeroAtual = numero[index] - 1;
          repeticao[numeroAtual] += 1;
        } else if (index == 7) {
          resultado += "-" + numero[index];
          numeroAtual = numero[index] - 1;
          repeticao[numeroAtual] += 1;
        } else {
          resultado += numero[index];
          numeroAtual = numero[index] - 1;
          repeticao[numeroAtual] += 1;
        }
      }
    }
  } else {
    resultado = "Array com tamanho incorreto."
  }
  return resultado;
}

console.log(generatePhoneNumber([1, 2, 3, 3, 4, 2, 7, 8, 9, 0, 1]))

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
