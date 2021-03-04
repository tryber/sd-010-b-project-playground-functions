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
                    if (i != j) {
                        if (array[i] === array[j]) {
                            cont += 1;                                                  
                        }               
                    }                     
                }  
            }
        }
    }else {
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
