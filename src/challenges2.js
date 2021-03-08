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
      for (let index = 0; index < repeticao.length; index++) {
        if (repeticao[index] > 2) {
          resultado = "não é possível gerar um número de telefone com esses valores";
        }
      }
  
        return resultado;
}

//console.log(generatePhoneNumber([0, 2, 3, 4, 5, 7, 7, 8, 9, 0, 7]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultado = false;
  if (lineA < (lineB + lineC) && lineB < (lineC + lineA) && lineC < (lineB + lineA))   {
    resultado = true;
  }
  return resultado;
}

//console.log(triangleCheck(3, 5, 1));

// Desafio 13
function hydrate(drinks) {
  let numeros = drinks.match(/\d/g);
  let numerosInt = [];
  let soma = 0;
  let frase = "";

  for (let index in numeros) {
    numerosInt.push(parseInt(numeros[index]));
  }
  for (let index in numerosInt) {
    soma += numerosInt[index];
  }
  if (numeros.length > 1) {
    frase = " copos de água"
  } else {
    frase = " copo de água"
  }

  return soma + frase;
}

console.log(hydrate("1 cachaça"))

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
