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
        names: name,
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
  let answer = '';
  let cont = 0;
  let condicao = true;
  if (array.length === 11) {
    for (let i = 0; i < array.length; i += 1) {
      if ((array[i] < 0) || (array[i] > 9)) {
        answer = 'não é possível gerar um número de telefone com esses valores';
        condicao = false;
      } else {
        for (let j = 0; j < array.length; j += 1) {
          if (i !== j) {
            if (array[i] === array[j]) {
              cont += 1;                                       
            }    
          }                   
        }
      }
    }
  } else {
    answer = 'Array com tamanho incorreto.';
    condicao = false;
  }
  if ((cont >= 3) || (condicao === false)) {
    answer = 'não é possível gerar um número de telefone com esses valores';
  } else {
    for (let x = 0; x < array.length; x += 1) {
      if (x === 0) {
        answer += '(' + array[x];
      } else if (x === 2) {
        answer += ') ' + array[x];
      } else if (x === 7) {
        answer += '-' + array[x];
      } else {
        answer += array[x];
      }
    }
  }
  return answer;
}
console.log(generatePhoneNumber([1, 11, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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
  total += ' copos de água';
  return total;
}
console.log(hydrate('1 cerveja, 1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
