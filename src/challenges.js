// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  }
  return false;
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
  return umaFrase.split(' ');
}

// teste item 3
// console.log(splitSentence("go Trybe"))
// console.log(splitSentence("vamo que vamo"))
// console.log(splitSentence("foguete"))

// Desafio 4
function concatName(umaLista) {
  let concat = `${umaLista[umaLista.length - 1]}, ${umaLista[0]}`;
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
  return ((wins * 3) + (ties * 1));
}

// teste item 5
// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  let counter = 0;
  let maior = Math.max(...numbers);
  for (let key in numbers) {
    if (numbers[key] === maior) {
      counter += 1;
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
  let distanciaMouse1 = Math.abs(mouse - cat1);
  let distanciaMouse2 = Math.abs(mouse - cat2);
  if (distanciaMouse1 === distanciaMouse2) {
    return 'os gatos trombam e o rato foge';
  }
  return (distanciaMouse1 < distanciaMouse2) ? 'cat1' : 'cat2';
}

// teste item 7
// console.log(catAndMouse(5, 2, 7));
// console.log(catAndMouse(6, 12, 18));
// console.log(catAndMouse(6, 9, 9));

// Desafio 8
function fizzBuzz(umaLista) {
  let out = [];
  for (let key in umaLista) {
    if (umaLista[key] % 3 === 0 && umaLista[key] % 5 === 0) {
      out.push('fizzBuzz');
    } else if (umaLista[key] % 3 === 0 || umaLista[key] % 5 === 0) {
      (umaLista[key] % 3 === 0) ? out.push('fizz') : out.push('buzz');
    } else {
      out.push('bug!');
    }
  }
  return out;
}

// teste intem 8
// array0 = [2, 15, 7, 9, 45];
// array1 = [7, 9];
// array2 = [9, 25];
// console.log(fizzBuzz(array0));
// console.log(fizzBuzz(array1));
// console.log(fizzBuzz(array2));

// Desafio 9
function encode(umaFrase) {
  let lista = umaFrase.split('');
  for (let key in lista) {
    switch (lista[key]) {
    case 'a':
      lista[key] = 1;
      break;
    case 'e':
      lista[key] = 2;
      break;
    case 'i':
      lista[key] = 3;
      break;
    case 'o':
      lista[key] = 4;
      break;
    case 'u':
      lista[key] = 5;
      break;
    default:
      break;
    }
  }
  return lista.join('');
}

function decode(umaFrase) {
  let lista = umaFrase.split('');
  for (let key in lista) {
    switch (lista[key]) {
    case '1':
      lista[key] = 'a';
      break;
    case '2':
      lista[key] = 'e';
      break;
    case '3':
      lista[key] = 'i';
      break;
    case '4':
      lista[key] = 'o';
      break;
    case '5':
      lista[key] = 'u';
      break;
    default:
      break;
    }
  }
  return lista.join('');
}

// teste item 9
// console.log(encode("hi there!"));
// console.log(decode("h3 th2r2!"));

// NÂO MEXER ABAIXO!
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
