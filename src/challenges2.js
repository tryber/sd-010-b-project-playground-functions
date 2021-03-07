// Desafio 10
function techList(technology, name) {
  technology.sort();
  if (technology.length === 0) { //conceito de array vazio lido no site https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/ 
    return 'Vazio!';
  } else {
    let register = [] //analisei o raciocinio da colega Leticia Galvão - T10B na questao,  porque não estava registrando todos os looping vi que ao inves de objeto ela usava um array 
    for (let index in technology) {
      register.push({
        tech: technology[index],
        name: name
      }
      )
    }
    return register;
  }
}

// Desafio 11
function generatePhoneNumber() {
  let phoneId = '';
  let show = 0;
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 = 0; index2 < numbers.length; index2 += 1)
      if (numbers[index] === numbers[index2]) {
        show += 1;
      }
  }
  if (show >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  phoneId = '(' + numbers[0] + numbers[1] + ')' + ' ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];
  return phoneId;
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
