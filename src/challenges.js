// Desafio 1
function compareTrue(valor1, valor2) {
  const bool = valor1 && valor2;

  return bool;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');

  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  const concatenated = `${array[(array.length - 1)]}, ${array[0]}`;

  return concatenated;
}

// Desafio 5
function footballPoints(wins, ties) {
  const totalPoints = (wins * 3) + ties;

  return totalPoints;
}

// Desafio 6
function highestCount(arrayOfNum) {
  //  Procura o maior valor
  let highestNum = arrayOfNum.reduce((num1, num2) => Math.max(num1, num2));

  //  Filtra os valores que são iguais ao maior valor
  let count = arrayOfNum.filter((value) => value === highestNum);

  //  Retorna o tamanho do array do count
  return count.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Valores absolutos, ou seja, ignora o negativo
  const catDistance1 = Math.abs(mouse - cat1);
  const catDistance2 = Math.abs(mouse - cat2);

  if (catDistance1 > catDistance2) {
    return 'cat1';
  }
  if (catDistance1 < catDistance2) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

console.log(catAndMouse(1, 0, 2));

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
