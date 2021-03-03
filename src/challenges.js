// Requisito 1 - Verificar se dois valores são verdadeiros
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}
console.log(compareTrue(false, true)); // -> false
console.log(compareTrue(false, false)); // -> false
console.log(compareTrue(true, true)); // -> true

// Requisito 2 - Calcular a área de um triángulo
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50)); // -> 250
console.log(calcArea(5, 2)); // -> 5
console.log(calcArea(51, 1)); // -> 25.5

// Requisito 3 - Dividir a frase nos espaços entre as palavras
function splitSentence(sentence) {
  return sentence.split(' ');
}
console.log(splitSentence('go Trybe')); // -> ['go', 'Trybe']
console.log(splitSentence('vamo que vamo')); // -> ['vamo', 'que', 'vamo']
console.log(splitSentence('foguete')); // -> ['foguete']

// Requisito 4 - Receber uma array de strings e retornar uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); // -> Paolillo, Lucas
console.log(concatName(['foguete', 'não', 'tem', 'ré'])); // -> 'ré, foguete'
console.log(concatName(['captain', 'my', 'captain'])); // -> 'captain, captain'

// Requisito 5 - retornar a pontuação de um time a partir do número de vitórias(3pts) e empates(1pt)
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
console.log(footballPoints(14, 8)); // -> 50
console.log(footballPoints(1, 2)); // -> 5
console.log(footballPoints(0, 0)); // -> 0

// Requisito 6 - Retornar a quantidades de vezes que o maior número de um array se repete
function highestCount(numbers) {
  let higherNumber = 0;
  let counter = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > higherNumber) {
      higherNumber = numbers[i];
      counter = 0;
    }
    if (numbers[i] === higherNumber) {
      counter += 1;
    }
  }
  return counter;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); // -> 2
console.log(highestCount([0, 4, 4, 4, 9, 2, 1])); // -> 1
console.log(highestCount([0, 0, 0])); // -> 3

// Requisito 7 - Ver qual gato chegará primeiro no rato ou se ele vai fugir
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist1 > dist2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(0, 3, 2)); // -> 'cat2
console.log(catAndMouse(0, 6, 12)); // -> 'cat1'
console.log(catAndMouse(0, 5, 5)); // -> 'os gatos trombam e o rato foge'

// Requisito 8 - Verifica se um número é divisível por 3, 5 ou ambos
function dividedBy(number, divisor1, divisor2) {
  if (number % divisor1 === 0 && number % divisor2 === 0) return 'fizzBuzz';

  if (number % divisor1 === 0) return 'fizz';

  if (number % divisor2 === 0) return 'buzz';

  return 'bug!';
}

function fizzBuzz(numbers) {
  let res = [];
  for (let num = 0; num < numbers.length; num += 1) {
    res.push(dividedBy(numbers[num], 3, 5));
  }
  return res;
}
console.log(fizzBuzz([2, 15, 7, 9, 45])); // -> ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']
console.log(fizzBuzz([7, 9])); // ->  ['bug!', 'fizz']
console.log(fizzBuzz([9, 25])); // -> ['fizz', 'buzz']

// Requisito 9 - Criar duas funções, uma que codifica trocando vogais por números e outra que decodifica a mensagem
function changeLetter(letter) {
  let pairs = {
    a: '1',
    i: '3',
    e: '2',
    u: '5',
    o: '4',
  };

  for (const key in pairs) {
    if (letter === key) letter = pairs[key];
  }
  return letter;
}

function encode(string) {
  string = string.split('');
  for (let char = 0; char < string.length; char += 1) {
    string[char] = changeLetter(string[char]);
  }
  return string.join('');
}

function changeNumber(number) {
  let pairs = {
    1: 'a',
    3: 'i',
    2: 'e',
    5: 'u',
    4: 'o',
  };

  for (const key in pairs) {
    if (number === key) number = pairs[key];
  }
  return number;
}

function decode(string) {
  string = string.split('');
  for (let char = 0; char < string.length; char += 1) {
    string[char] = changeNumber(string[char]);
  }
  return string.join('');
}
console.log(encode('hi there!')); // -> 'h3 th2r2!'
console.log(decode('h3 th2r2!')); // -> 'hi there!'

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
