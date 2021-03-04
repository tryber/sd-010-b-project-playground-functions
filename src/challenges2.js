// Desafio 10
function techList(array, name) {
  let help = [];
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  //Pesquisei uma função de ordenação neste link sort()
  array.sort();
  if (array.length === 0) {
    help = 'Vazio!';
  } else {
    for (let i = 0; i < array.length; i += 1) {
      let techDesired = {
        tech: '',
        name: name
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
  if (array.length != 11) {
    for (let i = 0; i < array.length; i += 1) {
      if ((array[i] < 0) || (array[i] > 9)) {
        answer = 'não é possível gerar um número de telefone com esses valores';
      } else {
        for (let j = 0; j < array.length; j += 1) {
          if (i != j) {
            if (array[i] === array[j]) {
              cont += 1;
              if ((cont <= 3) && i === array.length - 1) {
                
              }
            }
          }
        }
      }
    }
  }else {
    answer = 'Array com tamanho incorreto.';
  }
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
