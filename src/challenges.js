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
function is5(umaLista, key) {
  if (umaLista[key] % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}
function is3(umaLista, key) {
  if (umaLista[key] % 3 === 0) {
    return 'fizz';
  }
  return is5(umaLista, key);
}
function both3and5(umaLista, key) {
  if (umaLista[key] % 3 === 0 && umaLista[key] % 5 === 0) {
    return 'fizzBuzz';
  }
  return is3(umaLista, key);
}

function fizzBuzz(umaLista) {
  let out = [];
  for (let key in umaLista) {
    if (Object.prototype.hasOwnProperty.call(umaLista, key)) {
      (out.push(both3and5(umaLista, key)));
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
function change(caracter) {
  let ob = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let key in ob) {
    if (key === caracter) {
      caracter = ob[key];
      return caracter;
    }
  }
  return caracter;
}
function encode(umaFrase) {
  let lista = umaFrase.split('');
  for (let key in lista) {
    if (Object.prototype.hasOwnProperty.call(lista, key)) {
      lista[key] = change(lista[key]);
    }
  }
  return lista.join('');
}

function unchange(caracter) {
  let ob = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let key in ob) {
    if (key === caracter) {
      caracter = ob[key];
      return caracter;
    }
  }
  return caracter;
}
function decode(umaFrase) {
  let lista = umaFrase.split('');
  for (let key in lista) {
    if (Object.prototype.hasOwnProperty.call(lista, key)) {
      lista[key] = unchange(lista[key]);
    }
  }
  return lista.join('');
}

// teste item 9
console.log(encode('hi there!'));
console.log(decode('h3 th2r2!'));

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
