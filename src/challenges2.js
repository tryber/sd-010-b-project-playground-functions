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
  if (array.length != 11) return "Array com tamanho incorreto.";
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
  let resultado = '('+ddd.join('')+')' + ' ' + numero.join('') + '-' + numero2.join('');
  
  return resultado;
  }
}

// Desafio 12
// Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e 
// maior que o valor absoluto da diferença entre essas medidas.
function triangleCheck(lineA, lineB, lineC) {
  if ( lineA + lineB >  lineC ){
    if( Math.abs(lineA - lineB) < lineC){
      return true;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}


// Desafio 13
function hydrate(palavra) {
  let str = palavra;
  let troca = palavra.replace(/\D/g, "").split('');
  let soma = 0;
  let resultado;
  for(let i = 0; i < troca.length; i++){
    soma = soma + Number(troca[i]);
  }
  if ( soma == 1) { 
    resultado = soma + ' copo de água';
  }
  else {
    resultado = soma + ' copos de água';
  }
  return resultado;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
}
