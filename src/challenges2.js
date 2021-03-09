// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(arrayPhone) {
 let newPhone = [];

 let erro = 0;
 let erro2 = 0;

 let contArrayPhone = 0;

 if (arrayPhone.length == 11) {
  let index = 0;
  
  do{
    for (index ;index < 15; index++) {
      if (index == 0) {
        newPhone.push("(");
      } else if (index == 3) {
        newPhone.push(")")
      } else if (index == 4) {
        newPhone.push(" ");
      } else if (index == 10) {
        newPhone.push("-");
      }else{
        newPhone.push(arrayPhone[contArrayPhone]);
        contArrayPhone = contArrayPhone + 1;
      }
    }
  } while (index < 15);

  let sortArrayPhone = arrayPhone.sort();
  index = 0;
  let armazenaNum = 0;
  let contaNum = 0;

  for (index = 0; index < sortArrayPhone.length; index++) {
   if (index == 0) {
     armazenaNum = sortArrayPhone[index];
     contaNum = 1;
   } else {
    if (sortArrayPhone[index] === armazenaNum) {
      contaNum = contaNum + 1
    } else {
      if (contaNum >= 3) {
        erro = 1;
      }
      contaNum = 1;
      armazenaNum = sortArrayPhone[index];
    }
   }
  }

  index = 0;
  for ( index; index < sortArrayPhone.length; index++) {
    if ((sortArrayPhone[index] < 0) || (sortArrayPhone[index] > 9)) {
      erro2 = 1;
    }
  }
  if (erro == 0) {
    if (erro2 == 0) {
      return newPhone;
    } else {
      return "não é possível gerar um número de telefone com esses valores";
    }
  } else {
    return "não é possível gerar um número de telefone com esses valores";
  }

 } else {
   return "Array com tamanho incorreto.";
 }
}
generatePhoneNumber();
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
