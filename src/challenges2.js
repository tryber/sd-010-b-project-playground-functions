// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  let arrayKnowHow = [];
  let order = arrayTech.sort(); // coloca o array em ordem
  let resp = '';
  if (arrayTech == '') {
    resp = "Vazio!";
  } else {
    for (let t in order) {
      let knowHow = {}; // cria um objeto para cada tech
      knowHow.tech = order[t];
      knowHow.name = name;
      arrayKnowHow.push(knowHow); // adiciona o objeto no array
    }
    resp = arrayKnowHow;
  }
  return resp;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  let resp = '';
  let numbers = arrayNumbers;
  // verificações
  let bigThenTree = false; // maior que três
  let negativeAndNine = false; // existe negativo e maior que 9
  let rept = 0;
  for (let num in numbers) {
    let compare = numbers[num]; // variável de comparação que recebe os numeros
    // negativos
    if (compare < 0 || compare > 9) {
      negativeAndNine = true;
    }
    // contagem de repetidos
    let contNum = 0;  // zera a contagem para cada numero
    for (let n in numbers) {
      if (compare === numbers[n]){
        contNum += 1;
        // Quantidade de numeros repetidos for maior que 3
        if (contNum >= 3) {
          bigThenTree = true;
        }
      }
    }
  }
  // first condition
  if (numbers.length != 11) {
    resp = "Array com tamanho incorreto.";
  // second condition
  } else if (negativeAndNine === true || bigThenTree === true) {
    resp = "não é possível gerar um número de telefone com esses valores";
  }
  // Numéro de telefone. Ps.: Estava com dúvidas nessa parte e encontrei no slack, porém compreendi a lógica.
  else {
    let phone = '';
    for (let p in numbers) {
      if (p == 0) {
        phone = '(' + numbers[p]; // phone += ( + '1' -> phone = (1
      } else if (p == 1) {
        phone += numbers[p] + ') '; // phone += '2' + ) + ' ' ->  phone = (12) 
      } else if (p == 6) {
        phone += numbers[p]+ '-'; // phone += '7' + '-'
      } else {
        phone += numbers[p];  // phone = '3456' '8901'
      }
    }
    resp = phone;
  }
  return resp;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let triangle = false;
  let subAB = Math.abs(lineA - lineB);
  let subAC = Math.abs(lineA - lineC);
  let subBC = Math.abs(lineB - lineC);
  let sumAB = Math.abs(lineA + lineB);
  let sumAC = Math.abs(lineA + lineC);
  let sumBC = Math.abs(lineB + lineC);
  if (subAB < lineC < sumAB && subAC < lineB < sumAC && subBC < lineA < sumBC) {
    triangle = true;
  }
  return triangle;
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
