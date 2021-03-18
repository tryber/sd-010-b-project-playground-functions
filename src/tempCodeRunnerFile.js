function PhoneNumberTamanho(array) {
  let numero = true;
  if (array.length !== 11) {
    numero = false;
  }
  return numero;
}
function phoneValues(array) {
  let number = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      number = false;
    }
  }
  return number;
}
function phoneRepeater(array) {
  let number = 0;
  let tamanho = [];
  for (let index = 0; index < array.length; index += 1) {
    for( let index2 = 0; index < array.length; index2 += 1) {
    if(array[index] === array[index2]){
    number += 1;    
  }
}
  tamanho.push(number);
  number = 0;
}
return tamanho;
}
function numberPhoneRepete (array) {
  let repete = true;
  let tamanho = phoneRepeater(array);
  for (let index = 0; index < tamanho.length; index += 1) {
    if( tamanho[index] > 2){
      repete = false;
    }    
  }
  return repete;
}
function generatePhoneNumber(array) {
  if(PhoneNumberTamanho(array) === false) {
    return 'Array com tamanho incorreto.';
  }
  if(phoneValues(array) === false || numberPhoneRepete(array) === false) {
    return 'não é possível gerar um numero de telefone com esses valores';
  }
  return'(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}';
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));