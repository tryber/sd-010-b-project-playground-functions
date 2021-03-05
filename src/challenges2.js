// Desafio 10
function techList(array, name) {
  if (array.length == 0){
    return 'Vazio!';
  }

  let tecnologias = {
    tech: 'NomeTech',
    name: name
  };

  let resultado = [];
  array.sort();
  for (let i = 0; i < array.length; i++){
    resultado.push({'tech':array[i], 'name':name});
  }

  return resultado;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length > 11) return "Array com tamanho incorreto.";
  else {
  let frequente = array[0];
  let count;
  for (let i = 0; i < array.length; i++){
    count = 0;
    
    for(let j = 0; j< array.length; j++){
      if (array[j] == array[i]) count ++;
    }
    if (count >= 3 || array[i] < 0 || array[i] > 9){
      return "não é possível gerar um número de telefone com esses valores";
      break;
    }
  }

  let ddd = [];
  let numero = [];
  let numero2 = [];
  let letra;
  for(let k = 0; k < array.length; k++){
    letra = array[k].toString();
    if(k == 0 || k == 1){
      ddd.push(letra);
    }
    else if(k > 1 && k < 7){
      numero.push(letra);
    }
    else{
      numero2.push(letra);
    }
  }
  let resultado = ddd.join('') + ' ' + numero.join('') + '-' + numero2.join('');
  
  return resultado;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ( Math.abs(lineA - lineA) > lineC ){
    
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
}
