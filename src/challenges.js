// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}

// teste item 1
// console.log(compareTrue(true, true));
// console.log(compareTrue(false, true));
// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// teste item 2
// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(umaFrase) {
  return umaFrase.split(" ");
}

// teste item 3
// console.log(splitSentence("go Trybe"))
// console.log(splitSentence("vamo que vamo"))
// console.log(splitSentence("foguete"))

// Desafio 4
function concatName(umaLista) {
  let concat = umaLista[umaLista.length -1] + ", " + umaLista[0];
  return concat;
}

// teste item 4
// array0 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// array1 = ['foguete', 'não', 'tem', 'ré'];
// array2 = ['captain', 'my', 'captain'];
// console.log(concatName(array0));
// console.log(concatName(array1));
// console.log(concatName(array2));


// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3 ) + (ties * 1));
}

// teste item 5
// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  // pegar o maior número
  bigger = numbers[0];
  for (let key in numbers) {
    if (numbers[key] > bigger) {
      bigger = numbers[key];
    }
  }
  //contar quantas vezes ele aparece
  let counter = 0;
  for (let key in numbers) {
    if ( numbers[key] === bigger) {
      counter ++;
    }
  }
  return counter;
}
// teste item 6
// array0 = [9, 1, 2, 3, 9, 5, 7];
// array1 = [0, 4, 4, 4, 9, 2, 1];
// array2 = [0, 0, 0];
// console.log(highestCount(array0));
// console.log(highestCount(array1));
// console.log(highestCount(array2));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  distanciaMouse1 = Math.abs(mouse - cat1);
  distanciaMouse2 = Math.abs(mouse - cat2);

  if (distanciaMouse1 < distanciaMouse2) {
    return "cat1"
  }else if ( distanciaMouse2 < distanciaMouse1) {
    return "cat2"
  }else{
    return "os gatos trombam e o rato foge"
  }
}

// teste item 7
// console.log(catAndMouse(5, 2, 7));
// console.log(catAndMouse(6, 12, 18));
// console.log(catAndMouse(6, 9, 9));





// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
