// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(texto) {
  let result = texto.split(" ");
  return result;
}
console.log(splitSentence("Lara Capila"));

// Desafio 4
function concatName(array) {
  let primeiro = array[0];
  let ultimo = array[array.length -1];
  return ultimo + ', ' + primeiro;
}
console.log(concatName(['Lara', 'Karoline', 'De', 'Oliveira', 'Capila']));

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let resultado = vitorias + empates;
  return resultado;
}
console.log(footballPoints(1, 2));

// Desafio 6
function highestCount(numbers) {
  let maxNumber = 0;
  for (index = 0; index < numbers.length; index++) {
    if (numbers[index] > maxNumber) { 
      maxNumber = numbers[index];
    }
  }
  let cont = 0;
  for (index = 0; index < numbers.length; index++) {
    if (numbers[index] == maxNumber) { 
      cont ++;
    }
  }
  return cont;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let catName = "";
  if (distCat1 < distCat2) {
    catName = "cat1";
  } else if (distCat2 < distCat1) {
    catName = "cat2";
  } else {
    catName = "Cats estão na mesma distância do Mouse";
  }
  return catName;
}
console.log(catAndMouse(2, 4, 4));
// Desafio 8
function fizzBuzz(array) {
  let arrayReturn = [];
  for (index = 0; index < array.length; index++) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      arrayReturn[index] = "fizzBuzz";
    } else if (array[index] % 3 == 0) {
      arrayReturn[index] = "fizz";
    }else if (array[index] % 5 == 0) {
      arrayReturn[index] = "buzz";
    }else {
      arrayReturn[index] = "bug!";
    }
  }
  return arrayReturn;
}
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
