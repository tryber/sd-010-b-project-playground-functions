// Desafio 10
function techList(array, name) {
  let help = [];
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  // Pesquisei uma função de ordenação neste link sort()
  array.sort();
  if (array.length === 0) {
    help = 'Vazio!';
  } else {
    for (let i = 0; i < array.length; i += 1) {
      let techDesired = {
        tech: '',
        name: name,
      };
      techDesired.tech = array[i];
      help.push(techDesired);
    }
  }
  return help;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Junior'));

// Desafio 11
function generatePhoneNumber(array) {
  let resposta = 1;
  let cond = false;
  if (array.length === 11) {
    if ((Math.min.apply(Math, array) < 0) || (Math.max.apply(Math, array) > 9)) {
      resposta = 'não é possível gerar um número de telefone com esses valores';
    } else {
      for (let x in array) {
        for (let y in array) {
          if((x !== y) && (array[x] === array[y])) {
            resposta += 1;
          }
        }
        if(resposta >= 3) {
          resposta = 'não é possível gerar um número de telefone com esses valores';
          break;
        } else if (parseInt(x) === array.length - 1) {
          cond = true;
        } else {
          resposta = 1;
        }
      }
    }
  } else {
    resposta = 'Array com tamanho incorreto.';
  }
  if (cond === true) {
    resposta = '(';
    for (const key in array) {
      if (parseInt(key) === 2) {
        resposta += ') ' + array[key];
      } else if (parseInt(key) === 7) {
        resposta += '-' + array[key];
      } else {
        resposta += array[key];
      }
    }
  }
  return resposta;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let Bool;
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) {
    Bool = true;
  } else {
    Bool = false;
  }
  return Bool;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
// [Usado para converter para inteiro] https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript?gclid=CjwKCAiAp4KCBhB6EiwAxRxbpJ2ZoSCbAtRVGcAMrWejN_yykSX5ZMwplEhMSeZuVmqyOR3L9KiJnRoC_n4QAvD_BwE

// [Extrair digitos de strings] https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
function hydrate(string) {
  let str = string;
  let extrairNumeros = [];
  let total = 0;

  for (let i = 0; i < str.length; i += 1) {
    extrairNumeros[i] = str[i].replace(/\D/g, '');
    if (extrairNumeros[i] !== '') {
      total += parseInt(extrairNumeros[i]);
    }
  }
  if (total === 1) {
    total += ' copo de água';
  } else {
    total += ' copos de água';
  }
  return total;
}
console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
