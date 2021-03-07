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
function generatePhoneNumber(numbers) {
  let phoneId = '';
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    phoneId = '(' + numbers[0] + numbers[1] + ')' + ' ' + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + '-' + numbers[7] + numbers[8] + numbers[9] + numbers[10];
  }
  for (let index = 0; index < numbers.length; index += 1) {
    let show = 0;
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index2 = 0; index2 < numbers.length; index2 += 1) {//recebi a ajuda do colega Luiz Paulo Lima para que fizesse a comparação entre os index's
      if (numbers[index] === numbers[index2]) {
        show += 1;
      }
    }
    if (show >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return phoneId;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
   //formula do triangulo tirada do site https://brainly.LineCm.br/tarefa/34489130#:~:text=respondido-,Para%20LineCnstruir%20um%20tri%C3%A2ngulo%2C%20%C3%A9%20necess%C3%A1rio%20que%20a%20medida%20de,%C3%A9%20chamado%20condi%C3%A7%C3%A3o%20de%20exist%C3%AAncia.
   let partA = lineA;
   let partB = lineB;
   let partC = lineC
   if (partA < Math.abs(partB + partC) && Math.abs(partB - partC) < partA) {
    return true;
  }
  else if (partB < Math.abs(partA + partC) && Math.abs(partA - partC) < partB) {
    return true;
  }
  else if (partC < Math.abs(partA + partB) && Math.abs(partA - partB) < partC) {
    return true;
  } else {
    return false;
  }
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
