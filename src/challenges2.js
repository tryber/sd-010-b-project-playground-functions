// Desafio 10
function techList(techs, name) {
  if (techs.length > 0) {
    let objectTechs = [];
    techs.sort();
    for (let i = 0; i < techs.length; i++) {
      let obj = {};
      obj.tech = techs[i];
      obj.name = name;
      objectTechs.push(obj);
    }
    return objectTechs;
  } else {
    return 'Vazio!';
  }
  
}

// Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length == 11) {
    let isValid = true;
    let moreThanThree = 0;
    let phoneSorted = phone.split("").sort();
    let currentNumber = phoneSorted[0];
    for (let i = 0; i < phoneSorted.length; i++) {
      if (phoneSorted[i] != currentNumber) {
        currentNumber = phoneSorted[i];
        moreThanThree = 0;
      } else {
        moreThanThree++;
      }
      if (phone[i] < 0 || phone[i] > 9 || moreThanThree > 3) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      phoneSorted = phone.split("");
      // https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript
      phoneSorted.splice(0, 0, '(');
      phoneSorted.splice(3, 0, ')');
      phoneSorted.splice(9, 0, '-');
      return phoneSorted.join("");
    } else {
      return "Não é possível gerar um número de telefone com esses valores.";
    }
  } else {
    return "Array com tamanho incorreto.";
  }
}
console.log(generatePhoneNumber('12341671982'));

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
