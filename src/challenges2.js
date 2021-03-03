// Desafio 10
function techList() {
  // seu código aqui
  if (array.length == 0) {
    return "Vazio!";
  } else {
    let arraySort = array.sort();
    let objetoTech = {
      tech: [],
      name: name,
    };
    let finalArray = [];

    for (let i = 0; i < arraySort.length; i += 1) {
      objetoTech.tech.push = arraySort[i];
      finalArray.push (objetoTech);
    }
    console.log (finalArray);
  }
}

// Desafio 11
function generatePhoneNumber() {
  let repeatedNumbers = 0;
  let repeatedNumbersValidator = 0;
  let weirdNumbers = false;

  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] <= -1) || (array[i] >= 10)) {
      weirdNumbers = true;
    }   

    for (let j = 0; j < array.length; j += 1 ) {
      if (array[i] == array[j]){
      repeatedNumbers += 1;
        if (repeatedNumbers >= 3){
         repeatedNumbersValidator += repeatedNumbers;
        }
      }
    }
    repeatedNumbers = 0;
  }


  if ((weirdNumbers == true) || (repeatedNumbersValidator >= 3)){
    console.log ("não é possível gerar um número de telefone com esses valores")
  } else if (array.length != 11) {
    console.log("Array com tamanho incorreto.")
  } else {
    let string = '(';

    for (let i = 0; i < 2; i += 1){
      string += array[i];
    }
    string += ') '

    for (let i = 2; i < 7; i += 1) {
      string += array[i];
    }
    string += '-';
    for (let i = 7; i < array.length; i += 1) {
      string += array[i]
    }
    console.log (string);
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
