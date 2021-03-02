// Hello! Welcome to my playground!

// Challenge 1
function compareTrue(value1, value2) {
  return value1 === true && value2 === true ? true : false;
}

// Challenge 2
function calcArea(base, height) {
  if (base == 0 || height == 0) return 'invalid base or heigth';
  return (base * height) / 2;
}

// Challenge 3
function splitSentence(string) {
  return string.split(' ');
}

// Challenge 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Challenge 5
function footballPoints(v, d) {
  return v * 3 + d;
}

// Challenge 6
function highestCount(arr) {
  if (!Array.isArray(arr)) return 'im a array';
  const sortedArray = arr.sort((a, b) => a - b);
  let highestRepeated = 0;
  for (let number of sortedArray) {
    if (number === sortedArray[sortedArray.length - 1]) {
      highestRepeated += 1;
    }
  }
  return highestRepeated;
}

// Challenge 7
function catAndMouse(mouse, cat1, cat2) {
  //abs method found researching in w3 about Math methods in js
  const cat1Distance = Math.abs(cat1 - mouse);
  const cat2Distance = Math.abs(cat2 - mouse);
  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } else if (cat2Distance < cat1Distance) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

console.log(catAndMouse(0, 6, 6));

// Retorne a string 'cat2' caso a função catAndMouse receba o parâmetros onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja a 3 unidades de distância do rato

// Retorne a string 'cat1' caso a função catAndMouse receba o parâmetros onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja a 12 unidades de distância do rato

// Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba o parâmetros onde gatos estejam na mesma distância do rato

// Challenge 8
function fizzBuzz() {
  // seu código aqui
}

// Challenge 9
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
